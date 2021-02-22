import React from 'react'

import logo from '../../img/neo-logo.svg'

import './Header.css'

export default function Header() {
  return (
    <div>
      <header className="container header-container">
          <img src={`${logo}`} alt="Neo Logo"/>
          <p>Profile</p>
        </header>
    </div>
  )
}
