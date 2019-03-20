/*
应用根组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from './redux/actions'
// import * as actions from './redux/actions'


function dispatchAndLog(store, action) {
  console.log('dispatching: ', action)
  store.dispatch(action)
  console.log('next state', store.getState())
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
    this.incrementAsync = this.incrementAsync.bind(this)
  }

  static propTypes = {
    store: PropTypes.object.isRequired
    // store.getState()
    // store.dispatch(action)
  }
  increment() {
    const num = +this.selectRef.current.value
    this.props.store.dispatch(increment(num))
    // dispatchAndLog(this.props.store, increment(num))
  }

  decrement() {
    const num = +this.selectRef.current.value
    this.props.store.dispatch(decrement(num))
  }

  incrementIfOdd() {
    const num = +this.selectRef.current.value
    if(this.props.store.getState() % 2 === 1) {
      this.props.store.dispatch(increment(num))
    }
  }

  incrementAsync() {
    setTimeout(() => {
      const num = +this.selectRef.current.value
      this.props.store.dispatch(increment(num))
    }, 1000)
  }

  render() {
    const counter = this.props.store.getState()
    return (
      <div>
        <p>click {counter} times</p>
        <select ref={this.selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}