import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './components/Login/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      {/* If not logged in → Login page */}
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />}
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
      />

      {/* Home Feed Route */}
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />

      {/* Profile Route */}
      <Route
        path="/profile"
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
      />

      {/* 404 → redirect to home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App