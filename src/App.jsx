import { Routes, Route, Navigate } from 'react-router-dom'
import Feed from './components/Feed/Feed'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App