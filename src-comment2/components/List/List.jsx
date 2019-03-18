import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './List.css'
import Item from '../Item/Item'

class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }
  render() {
    const { comments, delComment } = this.props
    return (
      <ul className='list__container'>
        {
          comments.map((comment, index) => (
            <Item comment={ comment } key={index} delComment={ delComment } index={index}></Item>
          ))
        }
      </ul>
    )
  }
}

export default List