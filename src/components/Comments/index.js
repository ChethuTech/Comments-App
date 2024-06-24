import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [
      /*{
        id: 1,
        name: 'Elon Musk',
        comment:
          "If apple integrates AI in os level, iphone at my companies won't be allowed. For that matter any of that kind devices will in held at the entrance of the company in a farad cage",
        date: new Date(),
        randomColor:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
      },*/
    ],
    name: '',
    comment: '',
  }

  submit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomColor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]

    const newContact = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      randomColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newContact],
      name: '',
      comment: '',
    }))
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  deleteBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id && eachComment,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const totalComments = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="comments-heading"> Comments </h1>
        <div className="add-comment-img-container">
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />

          <form onSubmit={this.submit}>
            <p className="comments-description">
              Say something about 4.0 Technologies
            </p>

            <input
              value={name}
              onChange={this.onNameChange}
              type="text"
              placeholder="Your Name"
              className="input-name"
            />
            <textarea
              value={comment}
              onChange={this.onCommentChange}
              type="text"
              placeholder="Your Comment"
              className="input-comment"
            >
              {' '}
            </textarea>
            <button type="submit" className="submit-btn">
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <p className="count-comment">
          {' '}
          <span className="count">{totalComments}</span> Comments{' '}
        </p>

        <ul className="comments-list">
          {commentsList.map(eachComment => (
            <CommentItem
              clickDeleteBtn={this.deleteBtn}
              colors={initialContainerBackgroundClassNames}
              commentDetails={eachComment}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
