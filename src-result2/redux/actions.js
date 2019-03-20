/*
包含n个action creator的模块
action creator是用来返回action对象的工厂函数
 */
import {INCREMENT, DECREMENT} from './action-types'

// 同步增加的action
export const increment = (num) => ({type: INCREMENT, num})
// 同步减少的action
export const decrement = (num) => ({type: DECREMENT, num})


// 异步增加的action
export const incrementAsync = (num) => {
  return (dispatch, getState) => {
    console.log(getState())
    setTimeout(() => {
      dispatch({ type: INCREMENT, num })
    }, 1000)
  }
}
