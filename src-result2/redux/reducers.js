/*
包含n个reducer函数的模块
reducer函数: 根据老的state的指定的action产生新的state的回调函数
 */
import { INCREMENT, DECREMENT } from './action-types'

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.num
    case DECREMENT:
      return state - action.num
    default:
      return state
  }
}

export {
  counter
}