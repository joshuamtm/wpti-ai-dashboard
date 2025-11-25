import { useLocation, useNavigate } from 'react-router-dom'
import { Check, Gift, Mail, ArrowLeft } from 'lucide-react'

const TestimonialConfirmation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { hasVideo, name } = location.state || { hasVideo: false, name: 'there' }

  const discountCode = hasVideo ? 'WPTI-VIDEO-50' : 'WPTI-WRITTEN-10'
  const discountPercent = hasVideo ? '50%' : '10%'

  return (
    <div className="min-h-screen bg-beige py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-4">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-navy mb-2">Thank You, {name}! 🙏</h1>
          <p className="text-lg text-gray-700">
            Your testimonial has been submitted successfully.
          </p>
        </div>

        {/* Discount Code Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center">
            <Gift className="w-12 h-12 text-turquoise mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-navy mb-2">Your Exclusive Discount</h2>
            <p className="text-gray-600 mb-6">
              {hasVideo ? (
                <>Thank you for recording a video testimonial! Here's your <strong>50% off</strong> discount code:</>
              ) : (
                <>Thank you for your written testimonial! Here's your <strong>10% off</strong> discount code:</>
              )}
            </p>

            <div className="bg-turquoise bg-opacity-10 border-2 border-turquoise rounded-lg p-6 mb-4">
              <div className="text-sm text-gray-600 mb-2">Your Discount Code</div>
              <div className="text-3xl font-bold text-turquoise mb-2 tracking-wider">
                {discountCode}
              </div>
              <div className="text-lg text-navy font-semibold">
                {discountPercent} OFF MTM AI Community Membership
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(discountCode)
                alert('Discount code copied to clipboard!')
              }}
              className="px-6 py-2 bg-turquoise text-white rounded-lg hover:bg-turquoise-dark transition-colors"
            >
              Copy Code
            </button>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-navy mb-4">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email Confirmation</h3>
                <p className="text-sm text-gray-600">
                  You'll receive a confirmation email with your discount code within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Gift className="w-5 h-5 text-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">MTM AI Community Membership</h3>
                <p className="text-sm text-gray-600">
                  The AI Community will launch in January/February 2025. We'll send registration details to your email when it's ready.
                  Use your discount code <strong>{discountCode}</strong> when you sign up!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Check className="w-5 h-5 text-turquoise mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Your Testimonial</h3>
                <p className="text-sm text-gray-600">
                  Your testimonial helps other workforce professionals see what's possible with practical AI training.
                  We truly appreciate you taking the time to share your experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-warmYellow bg-opacity-20 border border-warmYellow rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-navy mb-2">🌟 What is the MTM AI Community?</h3>
          <p className="text-sm text-gray-700 mb-3">
            An ongoing space for nonprofit professionals to continue learning, share prompts, troubleshoot together,
            and stay current as AI evolves — basically, a continuation of what we started in this training.
          </p>
          <p className="text-sm text-gray-700">
            You'll get early access as a WPTI participant, plus your exclusive discount!
          </p>
        </div>

        {/* Questions Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="font-semibold text-navy mb-2">Questions or Need Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            If you have any questions, want to update your testimonial, or need assistance with your discount code:
          </p>
          <a
            href="mailto:joshua@mtm.now"
            className="text-turquoise hover:underline font-medium text-sm"
          >
            joshua@mtm.now
          </a>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-navy hover:text-turquoise transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Thank you for being part of the WPTI AI Training cohort!</p>
          <p className="mt-1">We're excited to continue this journey with you in the MTM AI Community.</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialConfirmation
