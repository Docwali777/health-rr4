import React, { Component } from 'react'

import Auth0Lock from 'auth0-lock'

class Register extends Component{

  static defaultProps = {
    clientID: 'MnRA94J210JSNDN3JPhoLb1FQxvydPTh',
    domain: 'drgauvin.auth0.com'
  }

componentWillMount(){
this.lock = new Auth0Lock(this.props.clientID, this.props.domain)

this.lock.on('authenticated', (authResult)=>{

this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
      console.log(profile);
browserHistory.push('/')
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));
    });
});

}

showLock = () =>{
  this.lock.show()
}


  render(){
    return(
    <div>
      <h1>Register</h1>
      <button onClick={()=>this.showLock()}>Register</button>
    </div>
    )
  }
}
export default Register
