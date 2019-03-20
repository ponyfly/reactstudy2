/*
redux核心管理对象store对象模块
 */
import { createStore } from 'redux'

import { counter } from './reducers'

export default createStore(counter)