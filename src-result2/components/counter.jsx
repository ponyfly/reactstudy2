/*
应用根组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import * as actions from './redux/actions'


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
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }
  increment() {
    const num = +this.selectRef.current.value
    this.props.increment(num)
  }

  decrement() {
    const num = +this.selectRef.current.value
    this.props.decrement(num)
  }

  incrementIfOdd() {
    const num = +this.selectRef.current.value
    if(this.props.counter % 2 === 1) {
      this.props.increment(num)
    }
  }

  incrementAsync() {
    const num = +this.selectRef.current.value
    this.props.incrementAsync(num)
  }

  render() {
    const counter = this.props.counter
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