import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Eye, Download, CheckCircle, Clock, FileText, Video,
  ArrowLeft, FileSpreadsheet, Search, Filter, Trash2
} from 'lucide-react'
import { getTestimonials, updateTestimonialStatus, deleteTestimonial, supabase } from '../lib/supabaseClient'

const AdminTestimonials = () => {
  const navigate = useNavigate()
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    setLoading(true)
    const { data, error } = await getTestimonials()
    if (data) {
      setTestimonials(data)
    }
    setLoading(false)
  }

  const handleStatusChange = async (id, newStatus) => {
    const { data, error } = await updateTestimonialStatus(id, newStatus)
    if (data) {
      loadTestimonials()
      alert(`Status updated to: ${newStatus}`)
    } else {
      alert('Failed to update status')
    }
  }

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete the testimonial from "${name}"? This cannot be undone.`)) {
      return
    }

    const { error } = await deleteTestimonial(id)
    if (!error) {
      loadTestimonials()
      setSelectedTestimonial(null)
    } else {
      alert('Failed to delete testimonial')
    }
  }

  const exportToCSV = () => {
    const headers = [
      'Date',
      'Name',
      'Title',
      'Organization',
      'Email',
      'Phone',
      'Challenge Before',
      'Aha Moment',
      'Skill Gained',
      'Recommendation',
      'Additional Thoughts',
      'Has Video',
      'Attribution',
      'Status',
      'Discount Code'
    ]

    const rows = testimonials.map(t => [
      new Date(t.created_at).toLocaleDateString(),
      t.name,
      t.title,
      t.organization,
      t.email,
      t.phone || '',
      t.challenge_before,
      t.aha_moment,
      t.skill_gained,
      t.colleague_recommendation,
      t.additional_thoughts || '',
      t.has_video ? 'Yes' : 'No',
      t.attribution_level,
      t.status,
      t.discount_code_sent
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row =>
        row.map(cell =>
          `"${String(cell).replace(/"/g, '""')}"`
        ).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wpti-testimonials-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const downloadMedia = async (url, filename) => {
    try {
      const { data, error } = await supabase.storage
        .from('testimonial-media')
        .download(url.replace('testimonial-media/', ''))

      if (error) throw error

      const blobUrl = window.URL.createObjectURL(data)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = filename || 'media-file'
      a.click()
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Error downloading media:', error)
      alert('Failed to download media file')
    }
  }

  const filteredTestimonials = testimonials.filter(t => {
    const matchesSearch = (
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const statusColors = {
    new: 'bg-info text-white',
    reviewed: 'bg-warning text-white',
    published: 'bg-success text-white'
  }

  return (
    <div className="min-h-screen bg-beige py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-navy hover:text-turquoise mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-navy mb-2">Testimonials Admin</h1>
              <p className="text-gray-600">
                Manage and review WPTI testimonials
              </p>
            </div>

            <button
              onClick={exportToCSV}
              className="flex items-center px-6 py-3 bg-success text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <FileSpreadsheet className="w-5 h-5 mr-2" />
              Export to CSV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-navy">{testimonials.length}</div>
            <div className="text-sm text-gray-600">Total Submissions</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-turquoise">
              {testimonials.filter(t => t.has_video).length}
            </div>
            <div className="text-sm text-gray-600">Video Testimonials</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-success">
              {testimonials.filter(t => t.status === 'published').length}
            </div>
            <div className="text-sm text-gray-600">Published</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-info">
              {testimonials.filter(t => t.status === 'new').length}
            </div>
            <div className="text-sm text-gray-600">New / Pending</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, organization, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent appearance-none"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        </div>

        {/* Testimonials Table */}
        {loading ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turquoise mx-auto mb-4" />
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No testimonials found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Organization</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Video</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTestimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(testimonial.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.title}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {testimonial.organization}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {testimonial.has_video ? (
                          <Video className="w-5 h-5 text-turquoise mx-auto" />
                        ) : (
                          <FileText className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={testimonial.status}
                          onChange={(e) => handleStatusChange(testimonial.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[testimonial.status]}`}
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="published">Published</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => setSelectedTestimonial(testimonial)}
                            className="p-2 text-turquoise hover:bg-turquoise hover:text-white rounded transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {testimonial.video_url && (
                            <button
                              onClick={() => downloadMedia(testimonial.video_url, `${testimonial.name}-video`)}
                              className="p-2 text-navy hover:bg-navy hover:text-white rounded transition-colors"
                              title="Download Video"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(testimonial.id, testimonial.name)}
                            className="p-2 text-danger hover:bg-danger hover:text-white rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedTestimonial && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-navy text-white p-6 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Testimonial Details</h2>
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="text-white hover:text-warmYellow transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Name:</span>
                      <p className="text-gray-900">{selectedTestimonial.name}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Title:</span>
                      <p className="text-gray-900">{selectedTestimonial.title}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Organization:</span>
                      <p className="text-gray-900">{selectedTestimonial.organization}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-900">{selectedTestimonial.email}</p>
                    </div>
                    {selectedTestimonial.phone && (
                      <div>
                        <span className="font-medium text-gray-700">Phone:</span>
                        <p className="text-gray-900">{selectedTestimonial.phone}</p>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-700">Discount Code:</span>
                      <p className="text-turquoise font-semibold">{selectedTestimonial.discount_code_sent}</p>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">Testimonial Content</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Challenge Before:</h4>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded">
                        {selectedTestimonial.challenge_before}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Aha Moment:</h4>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded">
                        {selectedTestimonial.aha_moment}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Skill Gained:</h4>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded">
                        {selectedTestimonial.skill_gained}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Recommendation:</h4>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded">
                        {selectedTestimonial.colleague_recommendation}
                      </p>
                    </div>
                    {selectedTestimonial.additional_thoughts && (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Additional Thoughts:</h4>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded">
                          {selectedTestimonial.additional_thoughts}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Attribution & Media */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">Attribution & Media</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Attribution Level:</span>
                      <p className="text-gray-900 capitalize">{selectedTestimonial.attribution_level.replace('_', ' ')}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Has Video:</span>
                      <p className="text-gray-900">{selectedTestimonial.has_video ? 'Yes' : 'No'}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4">
                    {selectedTestimonial.video_url && (
                      <button
                        onClick={() => downloadMedia(selectedTestimonial.video_url, `${selectedTestimonial.name}-video`)}
                        className="flex items-center px-4 py-2 bg-turquoise text-white rounded-lg hover:bg-turquoise-dark transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Video
                      </button>
                    )}
                    {selectedTestimonial.photo_url && (
                      <button
                        onClick={() => downloadMedia(selectedTestimonial.photo_url, `${selectedTestimonial.name}-photo`)}
                        className="flex items-center px-4 py-2 bg-navy text-white rounded-lg hover:bg-opacity-90 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Photo
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-b-lg">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="w-full px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminTestimonials
