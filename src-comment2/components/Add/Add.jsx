import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Add.css'

class Add extends Component {
  static propTypes = {
    comment: PropTypes.oneOfType([
      PropTypes.object.isRequired
    ]),
    addComment: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.contentRef = React.createRef()
    this.setUsername = this.setUsername.bind(this)
    this.setContent = this.setContent.bind(this)
    this.addComment = this.addComment.bind(this)
  }
  state = {
    username: '',
    content: ''
  }

  componentWillMount() {
    const { comment } = this.props
    if(comment) {
      this.setState({
        username: comment.username,
        content: comment.content
      })
    }
  }

  setUsername() {
    this.setState({
      username: this.usernameRef.current.value,
    })
  }
  setContent() {
    this.setState({
      content: this.contentRef.current.value,
    })
  }
  addComment() {
    this.props.addComment({
      username: this.state.username,
      content: this.state.content
    })
    this.setState({
      username: '',
      content: ''
    })
  }

  render() {
    return (
      <div className='add__container'>
        <input ref={ this.usernameRef } type="text" placeholder='请输入名字' value={this.state.username} onChange={this.setUsername} />
        <textarea ref={ this.contentRef } placeholder='请输入评论' cols="30" rows="10" value={this.state.content} onChange={this.setContent}></textarea>
        <button onClick={this.addComment}>添加</button>
      </div>
    )
  }
}

export default Add