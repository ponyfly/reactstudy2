import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MyNavLink from '../components/MyNavLink'
import News from './News'
import Message from './Message'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>this is home</h2>
        <MyNavLink to='/home/news' activeStyle={{ color: '#ffcd98' }}>news</MyNavLink>
        <MyNavLink to='/home/message' activeStyle={{ color: '#ffcd98' }}>message</MyNavLink>

        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default Home