/*
应用根组件
 */
import React, {Component} from 'react'

class App extends Component {
  state = {
    counter: 0
  }
  calculator(type) {
    let { counter } = this.state
    switch (type) {
      case '+' :
        counter++
        break
      case '-' :
        counter --
        break
      default:
        console.log('未定义指令')
    }
    this.setState({ counter })
  }
  caculatorIfOdd(type) {
    if (this.state.counter % 2 === 0) return
    this.calculator(type)
  }
  caculatorAsync(type) {
    setTimeout(() => {
      this.calculator(type)
    }, 3000)
  }
  render() {
    return (
      <div className='counter__container'>
        <div>{this.state.counter}</div>
        <div onClick={ this.calculator.bind(this, '+') }>+</div>
        <div onClick={ this.calculator.bind(this, '-') }>-</div>
        <div onClick={ this.caculatorIfOdd.bind(this, '+') }>caculatorIfOdd +</div>
        <div onClick={ this.caculatorAsync.bind(this, '+') }>caculatorAsync +</div>
      </div>
    )
  }
}

export default App