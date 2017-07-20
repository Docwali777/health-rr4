import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'


import Main from './components/pages/main'
import Menu from './components/Navigation/navigation'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Register from './components/pages/register'
import Info from './components/pages/info'

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
          <Route path='/info' component={Info} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
    </Route>
  </Router>
)



export default Routes
