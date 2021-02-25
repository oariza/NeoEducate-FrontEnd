import React, {useState} from 'react'
import {auth} from '../../firebaseconfig' 
import {useHistory} from 'react-router-dom'

import logo from '../../img/neo-logo.svg'

import './Login.css'

export default function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [msgError, setMsgError] = useState(null)
  
  const registerUser = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      history.push('/schools')
    })      
    .catch(err => {
      console.log(err.code)
      if (err.code == 'auth/weak-password') {
        setMsgError('Contraseña débil. Debe tener 6 o más caracteres')
        }
      if (err.code == 'auth/email-already-in-use') {
        setMsgError('Este correo ya se encuentra regsitrado')
      }
    })
  } 

  const loginUser = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      history.push('/schools')
    })
    .catch(err => {
      if (err.code == 'auth/wrong-password') {
        setMsgError('Usuario y/o contraseña incorrecta')
      }
      if (err.code == 'auth/user-not-found') {
        setMsgError('Usuario y/o contraseña incorrecta')
      }
    })
  }

  return (
    <div>
        <main className="main-login">
          <div className="container login-container">
          <img src={`${logo}`} alt=" "/>
          <h1>Log in</h1>
            <form onSubmit={registerUser} id="login-form">              
              <input 
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                id="email"
                placeholder="Email adress"/>
              <input
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                id="password"
                placeholder="Password"/>
              <input
                onClick={loginUser}
                value="Log in"
                className="btn btn-primary"/>
              <input
                type="submit"
                value="Register"
                className="btn btn-register"/>
            </form>
            {
              msgError != null ?
              (
                <div className="error-container">
                  {msgError}
                </div>
              )
              :
              (
                <span></span>
              )
            }
            
          </div>
        </main>
    </div>
  )
}


