import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import RightBar from '../components/RightBar/RightBar'
import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* Navbar — top fixed */}
      <Navbar />

      {/* Main wrapper — 3 columns */}
      <div className="wrapper">

        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Feed */}
        <Feed />

        {/* Right Sidebar */}
        <RightBar />

      </div>
    </div>
  )
}

export default Home