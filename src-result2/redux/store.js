/*
redux核心管理对象store对象模块
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { counter } from './reducers'

export default createStore(counter, applyMiddleware(thunk))

