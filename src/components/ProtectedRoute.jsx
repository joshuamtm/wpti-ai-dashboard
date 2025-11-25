import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, AlertCircle } from 'lucide-react'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(true)

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

  useEffect(() => {
    // Check if already authenticated (stored in sessionStorage)
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
    setIsChecking(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_authenticated', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
    navigate('/')
  }

  if (isChecking) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turquoise" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-navy mb-2">Admin Access</h1>
            <p className="text-gray-600 text-sm">
              Please enter the admin password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-danger bg-opacity-10 border border-danger rounded-lg p-3 flex items-start">
                <AlertCircle className="w-5 h-5 text-danger mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-danger">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-turquoise text-white rounded-lg hover:bg-turquoise-dark transition-colors font-semibold"
            >
              Access Admin Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-gray-600 hover:text-turquoise transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              If you don't have the admin password, contact Joshua at joshua@mtm.now
            </p>
          </div>
        </div>
      </div>
    )
  }

  // User is authenticated, show the protected content with logout button
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-danger text-white text-sm rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
        >
          Logout
        </button>
      </div>
      {children}
    </>
  )
}

export default ProtectedRoute
