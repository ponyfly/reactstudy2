import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './MyNavLink.css'

class MyNavLink extends Component {
  render() {
    return (
      <NavLink {...this.props} activeClassName='navactive'></NavLink>
    )
  }
}

export default MyNavLink
