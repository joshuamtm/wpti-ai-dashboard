import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// These values will be stored in environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to upload file to Supabase Storage
export const uploadFile = async (bucket, path, file) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error uploading file:', error)
    return { data: null, error }
  }
}

// Helper function to get public URL for uploaded file
export const getPublicUrl = (bucket, path) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

// Helper function to submit testimonial
export const submitTestimonial = async (testimonialData) => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonialData])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error submitting testimonial:', error)
    return { data: null, error }
  }
}

// Helper function to fetch all testimonials (admin)
export const getTestimonials = async () => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return { data: null, error }
  }
}

// Helper function to update testimonial status (admin)
export const updateTestimonialStatus = async (id, status, notes = null) => {
  try {
    const updates = { status }
    if (notes !== null) updates.notes = notes

    const { data, error } = await supabase
      .from('testimonials')
      .update(updates)
      .eq('id', id)
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating testimonial:', error)
    return { data: null, error }
  }
}
