import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../firebaseconfig'

import logo from '../../img/neo-logo.svg'
import loading from '../../img/loading.gif'
import './Header.css'



export default function Header() {
  const history = useHistory()
  const[user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user)=> {
      if (user) {
        setUser(user.email)
        console.log(user.email)
      }else {
        history.push('/')
      }
    })
  })

  const logOut = () => {
    auth.signOut()
    setUser(null)
    history.push('/')
  }

  return (
    <div>   

      <header className="container header-container">
          <img src={`${logo}`} alt="Neo Logo"/>
          {
            user ?
            (
              <p onClick={logOut}>
                Cerrar<br/>sesión
              </p>
            )
            :
            (
              <div className="loading">
                <img src={`${loading}`} alt="Neo Logo"/>
              </div>
            )
          }
          
        </header>
    </div>
  )
}
