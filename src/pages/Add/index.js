import React from 'react'

import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'

import './Add.css'

export default function Add() {
  return (
    <div>
      <Header/>

      <nav className="container nav-container-add">
        <img src={`${backIcon}`} alt=" "/>
        <h2>Add school</h2>        
      </nav>

      <main className="container white-container">
        <form>
          <label for="school-name">School name</label>
          <input type="text" id="fname"/>
          <label for="school-name">Credit card number</label>
          <input type="number" id="fname"/>
          <label for="school-name">Name on card</label>
          <input type="text" id="fname"/>
          <label for="school-name">Expiry date</label>
          <input type="number" id="fname"/>
          <label for="school-name">CVV</label>
          <input type="password" id="fname"/>
          <label for="school-name">Plan</label>
          <input type="number" id="fname"/>
          <label for="school-name">Users</label>
          <input type="number" id="fname"/>
          <input type="checkbox" id="active"/>
          <label for="active">Active</label>

          <input type="submit" value="Save" className="btn btn-primary"/>
          <input type="text" value="Delete" className="btn btn-secondary"/>
        </form>
      </main>
    </div>
  )
}
