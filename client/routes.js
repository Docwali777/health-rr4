import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom'


import Main from './components/pages/main'
import Menu from './components/Navigation/navigation'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Register from './components/pages/register'
import Info from './components/pages/info'

const Routes = (
  <Router history={browserHistory}>
  <Main />
  </Router>
)



export default Routes
