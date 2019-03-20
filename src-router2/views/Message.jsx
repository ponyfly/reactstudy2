import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import MessageDetail from './message-detail'

class Message extends Component {
  state = {
    messages: []
  }
  
  componentWillMount() {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'Message01', content: 'Message01content'},
        {id: 3, title: 'Message03', content: 'Message03content'},
        {id: 5, title: 'Message05', content: 'Message05content'},
      ]
      this.setState({ messages })
    }, 1000)
  }

  pushRoute(id) {
    this.props.history.push(`/home/message/${id}`)
  }
  replaceRoute(id) {
    this.props.history.replace(`/home/message/${id}`)
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {
            messages.map((m, index) => (
              <li key={index}>
                <Link to={`/home/message/${m.id}`}>{ m.title }</Link>
                <button onClick={ this.pushRoute.bind(this, m.id) }>push</button>
                <button onClick={ this.replaceRoute.bind(this, m.id) }>replace</button>
              </li>
            ))
          }
        </ul>
        <button onClick={ this.props.history.goBack }>返回</button>
        <section>
          <Route path='/home/message/:id' component={MessageDetail}></Route>
        </section>
      </div>
    )
  }
}

export default Message