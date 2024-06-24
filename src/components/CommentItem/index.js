import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class CommentItem extends Component {
  state = {isLiked: false}

  onClickLikeBtn = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  onDeleteBtn = () => {
    const {commentDetails, clickDeleteBtn} = this.props
    clickDeleteBtn(commentDetails.id)
  }

  render() {
    const {isLiked} = this.state
    const {commentDetails} = this.props
    const {name, comment, date, randomColor} = commentDetails
    const time = formatDistanceToNow(date)

    const likeBtn = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    return (
      <li>
        <div className="comment-container">
          <div className={`profile-pic ${randomColor}`}>
            <p>{name[0]}</p>
          </div>

          <div>
            <div className="name-time-container">
              <h1 className="name">{name}</h1>
              <p className="time"> {time}</p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>

        <div className="like-btn-delete-container">
          <button onClick={this.onClickLikeBtn} className="like-container-btn">
            <img className="like-btn" src={likeBtn} alt="like" />
            <p className={`like ${isLiked && 'liked'}`} alt="like">
              {' '}
              Like
            </p>
          </button>
          <button onClick={this.onDeleteBtn} className="delete-btn" data-testid="delete">
            <img
              className="delete-btn-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr />
      </li>
    )
  }
}

export default CommentItem
