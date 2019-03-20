/*
redux核心管理对象store对象模块
 */
import { createStore } from 'redux'

import { counter } from './reducers'

const store = createStore(counter)

// first one
// function patchStoreToAddLogging(store) {
//   const next = store.dispatch
//
//   store.dispatch = function dispatchAndLog(action) {
//     console.log('dispatching: ', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }
// }
//
// patchStoreToAddLogging(store)

// two
function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()
  
  let dispatch = store.dispatch
  // 在每一个 middleware 中变换 dispatch 方法。
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
  return Object.assign({}, store, { dispatch })
}

const logger = store => next => action => {
  console.log('dispatching: ', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const thunk = store => next => action => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
}

applyMiddlewareByMonkeypatching(store, [logger])

export default store