import React, {Component} from 'react'

import './App.css'
import List from './components/List/List'
import Add from './components/Add/Add'

class App extends Component {
  constructor(props) {
    super(props)
    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }
  state = {
    comments: [
      {username: 'Tom', content: 'React还可以'},
      {username: 'Jack', content: 'React有点难'},
      {username: 'bz', content: 'React SO SO!!!'}
    ],
    comment: {username: 'jt', content: 'React easy!!!'}
  }
  addComment(comment) {
    const { comments } = this.state
    if(!comment.username){
      alert('你名字呢？')
      return
    }
    if(!comment.content){
      alert('你内容呢？')
      return
    }
    comments.unshift(comment)
    this.setState({ comments })
  }
  delComment(index) {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState({ comments })
  }
  render() {
    return (
      <div className='container'>
        <Add addComment={ this.addComment } comment={ this.state.comment }></Add>
        <List comments={ this.state.comments } delComment={ this.delComment }></List>
      </div>
    )
  }
}

export default App