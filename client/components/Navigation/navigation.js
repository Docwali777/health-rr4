import React, { Component } from 'react'

//React-Bootstrap - NAV
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Register from '../pages/register'

class Menu extends Component{
  render(){
    return(
        <Router>
          <div>
            <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">SaluD/Os</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              <LinkContainer to="/about" >
                  <NavItem eventKey={1} href="/about" >About</NavItem>
              </LinkContainer>

              <LinkContainer to="/contact" >
                <NavItem eventKey={2} href="/contact" >Contact</NavItem>
              </LinkContainer>

                    </Nav>
              <Nav pullRight>
              <LinkContainer to='/register' >
                <NavItem eventKey={3} href="/register">Register</NavItem>
              </LinkContainer>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          </div>
        </Router>
    )
  }
}

export default Menu
