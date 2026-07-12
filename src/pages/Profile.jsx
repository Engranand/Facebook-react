import Navbar from '../components/Navbar/Navbar'
import { useAuth } from '../context/AuthContext'
import './Profile.css'

function Profile() {
  const { currentUser } = useAuth()

  return (
    <div className="profilePage">

      <Navbar />

      <div className="profileContainer">

        <div className="coverPhoto"></div>

        <div className="profileInfo">

          <div className="profileAvatar">
            A
          </div>

          <div className="profileDetails">
            <h1>{currentUser?.name}</h1>
            <p>1.2K friends</p>
          </div>

          <div className="profileActions">
            <button className="addStoryButton">
              + Add to story
            </button>

            <button className="editProfileButton">
              Edit profile
            </button>
          </div>

        </div>

        <hr />

        <div className="profileNavigation">
          <span>Posts</span>
          <span>About</span>
          <span>Friends</span>
          <span>Photos</span>
          <span>Videos</span>
          <span>More</span>
        </div>

      </div>

    </div>
  )
}

export default Profile