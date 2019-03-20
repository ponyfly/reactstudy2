import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter} from 'react-router-dom'

import App from './App'


ReactDOM.render((
  <BrowserRouter basename='/dist'>
    <App/>
  </BrowserRouter>
  /*<HashRouter basename='/dist'>
    <App/>
  </HashRouter>*/
), document.getElementById('root'))