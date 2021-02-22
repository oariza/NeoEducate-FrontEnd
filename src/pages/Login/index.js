import React, { Component } from 'react'

import logo from '../../img/neo-logo.svg'

import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <main className="main-login">
          <div className="container login-container">
          <img src={`${logo}`} alt=" "/>
          <h1>Log in</h1>
            <form id="login-form">              
              <input type="email" id="email" placeholder="Email adress"/>
              <input type="password" id="password" placeholder="Password"/>
              <input type="submit" value="Log in" className="btn btn-primary"/>
            </form>
          </div>
        </main>
      </div>
    )
  }
}


