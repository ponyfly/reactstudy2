import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)
    this.delComment = this.delComment.bind(this)
  }
  static propTypes = {
    comment: PropTypes.object.isRequired,
    delComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  delComment() {
    console.log(this)
    this.props.delComment(this.props.index)
  }
  render() {
    const { comment } = this.props
    return (
      <li className='clearfix'>
        <div>{ comment.username }</div>
        <div>{ comment.content }</div>
        <button onClick={ this.delComment}>删除</button>
      </li>
    )
  }
}

export default Item