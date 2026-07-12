const stories = [
  { id: 1, name: 'You', avatar: 'Y', active: true },
  { id: 2, name: 'Ava', avatar: 'A' },
  { id: 3, name: 'Noah', avatar: 'N' },
  { id: 4, name: 'Liam', avatar: 'L' },
  { id: 5, name: 'Sophia', avatar: 'S' },
]

function Stories() {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div className={`storyCard ${story.active ? 'active' : ''}`} key={story.id}>
          <div className="storyAvatar">{story.avatar}</div>
          <span className="storyName">{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
