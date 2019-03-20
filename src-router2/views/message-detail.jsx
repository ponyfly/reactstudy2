import React, {Component} from 'react'

class MessageDetail extends Component {

  state = {
    messageDetails: [
      {id: 1, title: 'Message01', content: 'Message content001'},
      {id: 3, title: 'Message03', content: 'Message content003'},
      {id: 5, title: 'Message05', content: 'Message content005'},
    ]
  }

  render() {
    const { id } = this.props.match.params
    const messageDetal = this.state.messageDetails.find(md => md.id === parseInt(id))
    return (
      <div>
        <div> ID: {id}</div>
        <div>TITLE: {messageDetal.title}</div>
        <div>CONTENT: {messageDetal.content}</div>
      </div>
    )
  }
}

export default MessageDetail