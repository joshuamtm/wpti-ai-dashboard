import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TestimonialData {
  id: string
  name: string
  title: string
  organization: string
  email: string
  phone?: string
  challenge_before?: string
  aha_moment?: string
  skill_gained?: string
  colleague_recommendation: string
  additional_thoughts?: string
  has_video: boolean
  attribution_level: string
  discount_code_sent: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const testimonial: TestimonialData = await req.json()

    const discountAmount = testimonial.has_video ? '50%' : '10%'
    const discountCode = testimonial.discount_code_sent

    // Format the testimonial content for the email
    const testimonialContent = `
${testimonial.challenge_before ? `**Challenge Before:**\n${testimonial.challenge_before}\n\n` : ''}
${testimonial.aha_moment ? `**Aha Moment:**\n${testimonial.aha_moment}\n\n` : ''}
${testimonial.skill_gained ? `**Skill Gained:**\n${testimonial.skill_gained}\n\n` : ''}
**Recommendation:**
${testimonial.colleague_recommendation}

${testimonial.additional_thoughts ? `**Additional Thoughts:**\n${testimonial.additional_thoughts}` : ''}
    `.trim()

    // Email to the submitter
    const submitterEmail = {
      from: 'WPTI AI Training <info@mtm.now>',
      to: [testimonial.email],
      subject: `Thank you for your WPTI testimonial! Here's your ${discountAmount} discount`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2B5F8E 0%, #4AB5C4 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${testimonial.name}!</h1>
          </div>

          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              We truly appreciate you taking the time to share your WPTI AI Training experience. Your testimonial helps other workforce professionals see what's possible!
            </p>

            <div style="background: #4AB5C4; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0 0 10px 0; font-size: 14px;">Your MTM AI Community Membership Discount Code:</p>
              <p style="margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 2px;">${discountCode}</p>
              <p style="margin: 10px 0 0 0; font-size: 14px;">${discountAmount} off your membership</p>
            </div>

            <h3 style="color: #2B5F8E; margin-top: 30px;">Your Testimonial:</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4AB5C4;">
              <p style="font-style: italic; color: #555; white-space: pre-line;">${testimonialContent}</p>
            </div>

            <p style="font-size: 14px; color: #666; margin-top: 25px;">
              Questions? Reply to this email or contact Joshua at <a href="mailto:joshua@mtm.now" style="color: #4AB5C4;">joshua@mtm.now</a>
            </p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">

            <p style="font-size: 12px; color: #999; text-align: center;">
              Meet the Moment | Workforce Professionals Training Institute<br>
              <a href="https://mtm.now" style="color: #4AB5C4;">mtm.now</a>
            </p>
          </div>
        </div>
      `
    }

    // Email to admin (Joshua)
    const adminEmail = {
      from: 'WPTI Testimonials <info@mtm.now>',
      to: ['joshua@mtm.now'],
      subject: `🎉 New WPTI Testimonial from ${testimonial.name}${testimonial.has_video ? ' (VIDEO)' : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: ${testimonial.has_video ? '#22c55e' : '#2B5F8E'}; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              ${testimonial.has_video ? '🎬 Video Testimonial Received!' : '📝 Written Testimonial Received'}
            </h1>
          </div>

          <div style="background: #f9f9f9; padding: 25px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${testimonial.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Title:</td>
                <td style="padding: 8px 0;">${testimonial.title}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Organization:</td>
                <td style="padding: 8px 0;">${testimonial.organization}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${testimonial.email}">${testimonial.email}</a></td>
              </tr>
              ${testimonial.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Phone:</td>
                <td style="padding: 8px 0;">${testimonial.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Attribution:</td>
                <td style="padding: 8px 0;">${testimonial.attribution_level}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2B5F8E;">Discount Code:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #22c55e;">${discountCode}</td>
              </tr>
            </table>

            <h3 style="color: #2B5F8E; border-bottom: 2px solid #4AB5C4; padding-bottom: 8px;">Testimonial Content</h3>

            ${testimonial.challenge_before ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #2B5F8E;">Challenge Before:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px;">${testimonial.challenge_before}</p>
            </div>
            ` : ''}

            ${testimonial.aha_moment ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #2B5F8E;">Aha Moment:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px;">${testimonial.aha_moment}</p>
            </div>
            ` : ''}

            ${testimonial.skill_gained ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #2B5F8E;">Skill Gained:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px;">${testimonial.skill_gained}</p>
            </div>
            ` : ''}

            <div style="margin-bottom: 15px;">
              <strong style="color: #2B5F8E;">Colleague Recommendation:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #4AB5C4;">${testimonial.colleague_recommendation}</p>
            </div>

            ${testimonial.additional_thoughts ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #2B5F8E;">Additional Thoughts:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px;">${testimonial.additional_thoughts}</p>
            </div>
            ` : ''}

            <div style="margin-top: 25px; padding: 15px; background: #2B5F8E; border-radius: 8px; text-align: center;">
              <a href="https://wpti-v2.netlify.app/admin/testimonials" style="color: white; text-decoration: none; font-weight: bold;">
                View in Admin Dashboard →
              </a>
            </div>
          </div>
        </div>
      `
    }

    // Send both emails using Resend
    const results = await Promise.allSettled([
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify(submitterEmail)
      }),
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify(adminEmail)
      })
    ])

    const submitterResult = results[0]
    const adminResult = results[1]

    return new Response(
      JSON.stringify({
        success: true,
        submitterEmail: submitterResult.status === 'fulfilled' ? 'sent' : 'failed',
        adminEmail: adminResult.status === 'fulfilled' ? 'sent' : 'failed'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})
