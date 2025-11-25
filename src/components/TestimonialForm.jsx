import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  User, Briefcase, Mail, Phone, MessageSquare,
  Lightbulb, Award, ThumbsUp, Video, Image as ImageIcon,
  Upload, Check, AlertCircle, ChevronRight, ChevronLeft
} from 'lucide-react'
import { supabase, uploadFile, submitTestimonial, sendTestimonialEmails } from '../lib/supabaseClient'

const TestimonialForm = () => {
  const navigate = useNavigate()
  const [currentSection, setCurrentSection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({ video: 0, photo: 0 })
  const [errors, setErrors] = useState({})

  // Form data state
  const [formData, setFormData] = useState({
    // Section 1: Contact Info
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',

    // Section 2: Story Content
    challenge_before: '',
    aha_moment: '',
    skill_gained: '',
    colleague_recommendation: '',
    additional_thoughts: '',

    // Section 3: Media
    video_file: null,
    photo_file: null,
    video_url: '',
    photo_url: '',
    has_video: false,

    // Section 4: Attribution & Permission
    attribution_level: 'full',
    photo_permission: 'none',
    permission_granted: false
  })

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('wpti_testimonial_draft')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (e) {
        console.error('Error loading saved draft:', e)
      }
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    const saveData = { ...formData }
    delete saveData.video_file
    delete saveData.photo_file
    localStorage.setItem('wpti_testimonial_draft', JSON.stringify(saveData))
  }, [formData])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleFileChange = (e, type) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file size
    const maxSize = type === 'video' ? 100 * 1024 * 1024 : 5 * 1024 * 1024 // 100MB for video, 5MB for photo
    if (file.size > maxSize) {
      setErrors(prev => ({
        ...prev,
        [type]: `File too large. Max size: ${type === 'video' ? '100MB' : '5MB'}`
      }))
      return
    }

    setFormData(prev => ({
      ...prev,
      [`${type}_file`]: file,
      ...(type === 'video' && { has_video: true })
    }))
    setErrors(prev => ({ ...prev, [type]: null }))
  }

  const validateSection = (sectionIndex) => {
    const newErrors = {}

    switch (sectionIndex) {
      case 0: // Contact Info
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.title.trim()) newErrors.title = 'Title is required'
        if (!formData.organization.trim()) newErrors.organization = 'Organization is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        break

      case 1: // Story Content - only require one field minimum
        if (!formData.colleague_recommendation.trim()) newErrors.colleague_recommendation = 'Please share at least your recommendation'
        break

      case 2: // Media (optional)
        // No required fields in this section
        break

      case 3: // Permission
        if (!formData.permission_granted) newErrors.permission_granted = 'You must grant permission to continue'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, 3))
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    setCurrentSection(prev => Math.max(prev - 1, 0))
    window.scrollTo(0, 0)
  }

  const handleSubmit = async () => {
    if (!validateSection(3)) return

    setIsSubmitting(true)

    try {
      let videoUrl = ''
      let photoUrl = ''

      // Upload video if exists
      if (formData.video_file) {
        const videoPath = `${Date.now()}_${formData.video_file.name}`
        const { data, error } = await uploadFile('testimonial-media', videoPath, formData.video_file)
        if (error) throw new Error('Video upload failed')
        videoUrl = `testimonial-media/${videoPath}`
        setUploadProgress(prev => ({ ...prev, video: 100 }))
      }

      // Upload photo if exists
      if (formData.photo_file) {
        const photoPath = `${Date.now()}_${formData.photo_file.name}`
        const { data, error } = await uploadFile('testimonial-media', photoPath, formData.photo_file)
        if (error) throw new Error('Photo upload failed')
        photoUrl = `testimonial-media/${photoPath}`
        setUploadProgress(prev => ({ ...prev, photo: 100 }))
      }

      // Prepare testimonial data
      const testimonialData = {
        name: formData.name,
        title: formData.title,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone || null,
        challenge_before: formData.challenge_before || null,
        aha_moment: formData.aha_moment || null,
        skill_gained: formData.skill_gained || null,
        colleague_recommendation: formData.colleague_recommendation,
        additional_thoughts: formData.additional_thoughts || null,
        video_url: videoUrl || null,
        photo_url: photoUrl || null,
        has_video: formData.has_video,
        attribution_level: formData.attribution_level,
        photo_permission: formData.photo_permission,
        permission_granted: formData.permission_granted,
        status: 'new',
        discount_code_sent: formData.has_video ? 'WPTI-VIDEO-50' : 'WPTI-WRITTEN-10'
      }

      // Submit to Supabase
      const { data, error } = await submitTestimonial(testimonialData)
      if (error) throw error

      // Send email notifications (non-blocking)
      sendTestimonialEmails({
        ...testimonialData,
        id: data[0]?.id
      })

      // Clear localStorage
      localStorage.removeItem('wpti_testimonial_draft')

      // Navigate to confirmation page
      navigate('/testimonial/confirmation', {
        state: {
          hasVideo: formData.has_video,
          name: formData.name
        }
      })

    } catch (error) {
      console.error('Error submitting testimonial:', error)
      setErrors({ submit: 'Failed to submit testimonial. Please try again or email it to joshua@mtm.now' })
      setIsSubmitting(false)
    }
  }

  const sections = [
    { id: 0, title: 'About You', icon: User },
    { id: 1, title: 'Your Story', icon: MessageSquare },
    { id: 2, title: 'Media (Optional)', icon: Video },
    { id: 3, title: 'Permission', icon: Check }
  ]

  return (
    <div className="min-h-screen bg-beige py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Share Your WPTI Experience</h1>
          <p className="text-gray-700">
            Thank you for completing the AI Training Workshop! Your testimonial helps other workforce professionals see what's possible.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isActive = currentSection === index
              const isCompleted = currentSection > index

              return (
                <div key={section.id} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                    ${isActive ? 'border-turquoise bg-turquoise text-white' : ''}
                    ${isCompleted ? 'border-success bg-success text-white' : ''}
                    ${!isActive && !isCompleted ? 'border-gray-300 bg-white text-gray-400' : ''}
                  `}>
                    {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                  </div>
                  {index < sections.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 transition-all
                      ${isCompleted ? 'bg-success' : 'bg-gray-300'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
          <div className="text-center text-sm text-gray-600">
            Step {currentSection + 1} of {sections.length}: {sections[currentSection].title}
          </div>
        </div>

        {/* Form Sections */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Section 0: Contact Info */}
          {currentSection === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-4">About You</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.name ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="e.g., Jane Doe"
                />
                {errors.name && <p className="text-danger text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="inline w-4 h-4 mr-1" />
                  Your Title/Role *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.title ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="e.g., Career Counselor, Program Manager"
                />
                {errors.title && <p className="text-danger text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="inline w-4 h-4 mr-1" />
                  Your Organization *
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.organization ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="Organization name"
                />
                {errors.organization && <p className="text-danger text-sm mt-1">{errors.organization}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.email ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-danger text-sm mt-1">{errors.email}</p>}
                <p className="text-sm text-gray-500 mt-1">We'll use this to send your MTM AI Community discount code</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  placeholder="Only if you're open to a brief follow-up"
                />
              </div>
            </div>
          )}

          {/* Section 1: Story Content */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-4">Your Story</h2>
              <p className="text-gray-600 mb-6">
                The best testimonials tell a quick story: where you started → what shifted → where you are now
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <AlertCircle className="inline w-4 h-4 mr-1" />
                  What challenge or hesitation brought you to this AI training? *
                </label>
                <textarea
                  name="challenge_before"
                  value={formData.challenge_before}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.challenge_before ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="What was holding you back from using AI before? What concerns did you have?"
                />
                {errors.challenge_before && <p className="text-danger text-sm mt-1">{errors.challenge_before}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Lightbulb className="inline w-4 h-4 mr-1" />
                  What was your biggest "aha moment" or breakthrough during the program? *
                </label>
                <textarea
                  name="aha_moment"
                  value={formData.aha_moment}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.aha_moment ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="Was there a specific session, exercise, or conversation that shifted your thinking?"
                />
                {errors.aha_moment && <p className="text-danger text-sm mt-1">{errors.aha_moment}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="inline w-4 h-4 mr-1" />
                  What specific AI skill or application has been most valuable to you? *
                </label>
                <textarea
                  name="skill_gained"
                  value={formData.skill_gained}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.skill_gained ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder="How are you actually using AI in your work now? Any time saved, tasks improved, or new capabilities?"
                />
                {errors.skill_gained && <p className="text-danger text-sm mt-1">{errors.skill_gained}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ThumbsUp className="inline w-4 h-4 mr-1" />
                  What would you tell a colleague who's considering this training? *
                </label>
                <textarea
                  name="colleague_recommendation"
                  value={formData.colleague_recommendation}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent
                    ${errors.colleague_recommendation ? 'border-danger' : 'border-gray-300'}
                  `}
                  placeholder='If a fellow workforce professional asked "Is this worth it?" — what would you say?'
                />
                {errors.colleague_recommendation && <p className="text-danger text-sm mt-1">{errors.colleague_recommendation}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else you'd like to share? (Optional)
                </label>
                <textarea
                  name="additional_thoughts"
                  value={formData.additional_thoughts}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  placeholder="Any other thoughts about your experience, the facilitation, the content, or the community"
                />
              </div>

              {/* AI Help Section */}
              <div className="bg-turquoise bg-opacity-10 border border-turquoise rounded-lg p-4 mt-6">
                <h3 className="text-sm font-bold text-navy mb-2">💡 Need Help Writing?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Feel free to use AI to help draft your responses! Here's a prompt you can use:
                </p>
                <div className="bg-white p-3 rounded text-xs text-gray-600 font-mono overflow-x-auto">
                  I just completed a 4-session AI training workshop for workforce development professionals. Draft a testimonial that:
                  <br />- Starts with my challenge: [your challenge]
                  <br />- Describes my aha moment: [your aha moment]
                  <br />- Explains how I'm using AI now: [your current use]
                  <br />- Ends with a recommendation
                  <br /><br />Keep it conversational and authentic (100-150 words).
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Media Upload */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-4">Media Upload (Optional)</h2>
              <p className="text-gray-600 mb-6">
                Video testimonials receive a <strong className="text-turquoise">50% discount code</strong>,
                while written testimonials receive a <strong className="text-turquoise">10% discount code</strong>.
              </p>

              {/* Video Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-turquoise transition-colors">
                <div className="text-center">
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-navy mb-2">Video Testimonial (50% off)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    2-3 minutes is ideal. Phone quality is perfectly fine! Answer the questions from "Your Story" in your own words.
                  </p>

                  {formData.video_file ? (
                    <div className="bg-success bg-opacity-10 border border-success rounded-lg p-4">
                      <Check className="w-6 h-6 text-success mx-auto mb-2" />
                      <p className="text-sm font-medium text-success">
                        {formData.video_file.name}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {(formData.video_file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, video_file: null, has_video: false }))}
                        className="text-sm text-danger hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="video/mp4,video/mov,video/webm"
                        onChange={(e) => handleFileChange(e, 'video')}
                        className="hidden"
                      />
                      <div className="inline-flex items-center px-6 py-3 bg-turquoise text-white rounded-lg hover:bg-turquoise-dark transition-colors">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Video File
                      </div>
                      <p className="text-xs text-gray-500 mt-2">MP4, MOV, or WebM • Max 100MB</p>
                    </label>
                  )}

                  {errors.video && <p className="text-danger text-sm mt-2">{errors.video}</p>}
                </div>
              </div>

              {/* Photo Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-turquoise transition-colors">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-navy mb-2">Professional Photo (Optional)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A professional headshot works great, but any clear photo of you is fine
                  </p>

                  {formData.photo_file ? (
                    <div className="bg-success bg-opacity-10 border border-success rounded-lg p-4">
                      <Check className="w-6 h-6 text-success mx-auto mb-2" />
                      <p className="text-sm font-medium text-success">
                        {formData.photo_file.name}
                      </p>
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, photo_file: null }))}
                        className="text-sm text-danger hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          onChange={(e) => handleFileChange(e, 'photo')}
                          className="hidden"
                        />
                        <div className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-opacity-90 transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Photo
                        </div>
                        <p className="text-xs text-gray-500 mt-2">JPG, PNG, or WebP • Max 5MB</p>
                      </label>

                      <div className="mt-4">
                        <label className="flex items-center justify-center text-sm text-gray-600">
                          <input
                            type="radio"
                            name="photo_permission"
                            value="linkedin"
                            checked={formData.photo_permission === 'linkedin'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Or pull my photo from LinkedIn
                        </label>
                      </div>
                    </>
                  )}

                  {errors.photo && <p className="text-danger text-sm mt-2">{errors.photo}</p>}
                </div>
              </div>

              <div className="bg-warmYellow bg-opacity-20 border border-warmYellow rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>No camera handy?</strong> You can also email your video separately to joshua@mtm.now
                </p>
              </div>
            </div>
          )}

          {/* Section 3: Permission & Attribution */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-4">Permission & Attribution</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How would you like to be credited? *
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'full', label: 'Full name and title', example: 'e.g., "Jane Doe, Career Counselor"' },
                    { value: 'first_title', label: 'First name and title only', example: 'e.g., "Jane, Career Counselor"' },
                    { value: 'first_initial', label: 'First name and last initial', example: 'e.g., "Jane D."' },
                    { value: 'anonymous', label: 'Anonymous (role only)', example: 'e.g., "Career Counselor"' }
                  ].map(option => (
                    <label key={option.value} className="flex items-start p-3 border border-gray-300 rounded-lg hover:border-turquoise cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="attribution_level"
                        value={option.value}
                        checked={formData.attribution_level === option.value}
                        onChange={handleInputChange}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-500">{option.example}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-turquoise transition-colors">
                  <input
                    type="checkbox"
                    name="permission_granted"
                    checked={formData.permission_granted}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">I grant permission</span> for my testimonial to be used by WPTI (Workforce Professionals Training Institute) and Meet the Moment in marketing materials, websites, social media, presentations, case studies, and promotional content. I understand I can request removal at any time by emailing joshua@mtm.now.
                  </div>
                </label>
                {errors.permission_granted && <p className="text-danger text-sm mt-2">{errors.permission_granted}</p>}
              </div>

              <div className="bg-turquoise bg-opacity-10 border border-turquoise rounded-lg p-4">
                <h3 className="text-sm font-bold text-navy mb-2">🎁 Your Discount Code</h3>
                <p className="text-sm text-gray-700">
                  After submitting, you'll receive:
                </p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1 ml-4">
                  <li>• <strong>Video testimonial:</strong> 50% off MTM AI Community Membership</li>
                  <li>• <strong>Written testimonial:</strong> 10% off MTM AI Community Membership</li>
                </ul>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errors.submit && (
            <div className="bg-danger bg-opacity-10 border border-danger rounded-lg p-4 mb-6">
              <p className="text-danger text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors
                ${currentSection === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            {currentSection < 3 ? (
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-3 bg-turquoise text-white rounded-lg hover:bg-turquoise-dark transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex items-center px-8 py-3 rounded-lg transition-colors
                  ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-success hover:bg-opacity-90'
                  } text-white font-semibold
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Submit Testimonial
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Auto-save indicator */}
        <div className="text-center mt-4 text-sm text-gray-500">
          💾 Your progress is automatically saved
        </div>
      </div>
    </div>
  )
}

export default TestimonialForm
