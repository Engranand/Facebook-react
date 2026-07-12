import './Feed.css'
import Stories from './Stories'
import Post from './Post'

const posts = [
  {
    id: 1,
    user: 'Maya Chen',
    avatar: 'M',
    time: '10 min ago',
    content:
      'Enjoying the fresh air and a quiet morning. Sometimes simple moments are the best reset.',
    likes: 124,
    comments: 18,
    shares: 7,
  },
  {
    id: 2,
    user: 'Daniel Brooks',
    avatar: 'D',
    time: '1 hour ago',
    content:
      'Finished the first version of my design system. Excited to keep refining it with the team.',
    likes: 89,
    comments: 12,
    shares: 3,
  },
]

function Feed() {
  return (
    <div className="feed">
      <div className="feedTop">
        <div className="feedSearchBox">
          <span className="feedSearchIcon">✏️</span>
          <span>What is on your mind?</span>
        </div>
        <button className="feedButton">Post</button>
      </div>

      <Stories />

      <div className="feedPosts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Feed
