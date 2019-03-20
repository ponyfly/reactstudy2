/*
应用根组件
 */
import React, {Component} from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import About from './views/About'
import Home from './views/Home'
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
  render() {
    return (
      <div>
        <Link to='/my'/>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*导航路由链接*/}
              <MyNavLink to='/about' className='list-group-item'>About</MyNavLink>
              <MyNavLink to='/home' className='list-group-item'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*路由组件显示*/}
                <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Redirect to='/home'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}