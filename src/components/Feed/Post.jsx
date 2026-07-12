import { useState } from 'react'

function Post({ user, avatar, time, content, likes, comments, shares }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [commentCount, setCommentCount] = useState(comments)
  const [shareCount, setShareCount] = useState(shares)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((count) => count - 1)
    } else {
      setLiked(true)
      setLikeCount((count) => count + 1)
    }
  }

  const handleComment = () => {
    setCommentCount((count) => count + 1)
  }

  const handleShare = () => {
    setShareCount((count) => count + 1)
  }

  return (
    <article className="postCard">
      <div className="postHeader">
        <div className="postUser">
          <div className="postAvatar">{avatar}</div>
          <div>
            <h4>{user}</h4>
            <p>{time}</p>
          </div>
        </div>
        <button className="postMenu" type="button">
          ⋯
        </button>
      </div>

      <p className="postContent">{content}</p>

      <div className="postStats">
        <span>👍 {likeCount}</span>
        <span>💬 {commentCount}</span>
        <span>↗ {shareCount}</span>
      </div>

      <div className="postActions">
        <button type="button" onClick={handleLike} style={{ color: liked ? '#1877f2' : undefined }}>
          {liked ? 'Liked' : 'Like'}
        </button>
        <button type="button" onClick={handleComment}>
          Comment
        </button>
        <button type="button" onClick={handleShare}>
          Share
        </button>
      </div>
    </article>
  )
}

export default Post
