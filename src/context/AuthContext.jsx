import { createContext, useContext, useState } from 'react'

// Create Context
const AuthContext = createContext()

// Valid credentials
const VALID_EMAIL    = 'alex@facebook.com'
const VALID_PASSWORD = 'alex123'

// Provider
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState('')

  const login = (email, password) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setIsLoggedIn(true)
      setCurrentUser({
        name: 'Alex Carter',
        email: email,
        avatar: '/assets/profile_pic.png',
      })
      setError('')
      return true
    } else {
      setError('Wrong email or password. Try again.')
      return false
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export function useAuth() {
  return useContext(AuthContext)
}