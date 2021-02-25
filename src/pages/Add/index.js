import React, {useState, useEffect} from 'react'
import {db} from '../../firebaseconfig'
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'
import Hidden from '@material-ui/core/Hidden'
import backIconB from '../../img/back-arrow-b.svg'

import './Add.css'

export default function Add() {
  const[imgSchool, setImgSchool] = useState('')
  const[school, setSchool] = useState('')
  const[creditCard, setCreditCard] = useState('')
  const[nameCard, setNameCard] = useState('')
  const[expYear, setExpYear] = useState('')
  const[expMonth, setExpMonth] = useState('')
  const[cvv, setCvv] = useState('')
  const[postalCode, setPostalCode] = useState('')
  const[numUsers, setNumUsers] = useState('')
  const[tier, setTier] = useState('')
  const[activeUser, setActiveUser] = useState(false)
  const[error, setError] = useState('')

  const setUsers = async (e) => {
    e.preventDefault()
    if (!school.trim()) {
      setError('School name field is empty')
    }
    if (!creditCard.trim()) {
      setError('Credit card number field is empty')
    }
    if (!nameCard.trim()) {
      setError('Credit card name field is empty')
    }
    if (!expYear.trim()) {
      setError('Expiry year field is empty')
    }
    if (!expMonth.trim()) {
      setError('Expity month field is empty')
    }
    if (!cvv.trim()) {
      setError('Card validation code field is empty')
    }
    if (!postalCode.trim()) {
      setError('Postal code number field is empty')
    }
    if (!numUsers.trim()) {
      setError('Number of users field is empty')
    }
    const objSchool = {
      imgSchool: imgSchool,
      school:school,
      creditCard:creditCard,
      nameCard:nameCard,
      expYear:expYear,
      expMonth:expMonth,
      cvv:cvv,
      postalCode:postalCode,
      numUsers:numUsers,
      tier:tier,
      activeUser:activeUser
    }
    try{
      const data = await db.collection('schools').add(objSchool)
      console.log('Escuela añadida')
    }
    catch(err){
      console.log(err)
    }
    setImgSchool('')
    setSchool('')
    setCreditCard('')
    setNameCard('')
    setExpYear('')
    setExpMonth('')
    setCvv('')
    setPostalCode('')
    setNumUsers('')
    setTier('')
    setActiveUser(false)


  }
  
  useEffect (()=> {
    if (numUsers <= 0){
      setTier("")
    }
    if (numUsers>= 1 && numUsers <=50){
      setTier("Tier 1")
    }
    if (numUsers>= 51 && numUsers <=150){
      setTier("Tier 2")
    }
    if (numUsers>= 151){
      setTier("Tier 3")
    }
  })



  return (
    <div>
      <Header/>

      <Hidden only={['md', 'lg', 'xl']}>
        <nav className="container nav-container-add">
          <Link to = "/schools">
            <img src={`${backIcon}`} alt=" "/>
          </Link>
          <h2>Add school</h2>        
        </nav>
      </Hidden>

      <main className="container white-container school-form">
        <Hidden only={['sm', 'xs']}>
          <nav className="container nav-container-add">
            <img src={`${backIconB}`} alt=" "/>
            <h2>Add school</h2>        
          </nav>
        </Hidden>
        
        <form onSubmit={setUsers}>
          <label for="img-school">URL School image</label>
          <input 
            value={imgSchool}
            onChange= {(e)=>{setImgSchool(e.target.value)}}
            type="text"
            id="img-school"
          />

          <label for="school-name">School name</label>
          <input 
            value={school}
            onChange= {(e)=>{setSchool(e.target.value)}}
            type="text"
            id="school-name"
          />

          <label for="credit-card-num">Credit card number</label>
          <input
            value={creditCard}
            onChange= {(e)=>{setCreditCard(e.target.value)}}
            type="number"
            id="credit-card-num"
          />

          <label for="card-name">Name on card</label>
          <input 
            value={nameCard}
            onChange= {(e)=>{setNameCard(e.target.value)}}
            type="text"
            id="card-name"
          />

          <div className="flex-container">
            <div className="column-container">
              <label for="expiry-year">Exp. year</label>
              <input
                value={expYear}
                onChange= {(e)=>{setExpYear(e.target.value)}}
                type="number"
                id="expiry-year"
              />
            </div>

            <div className="column-container">
              <label for="expiry-month">Exp. month</label>
              <input
                value={expMonth}
                onChange= {(e)=>{setExpMonth(e.target.value)}}
                type="number"
                id="expiry-month"
              />
            </div>
            
            <div className="column-container">
              <label for="cvv">CVV</label>
              <input
                value={cvv}
                onChange= {(e)=>{setCvv(e.target.value)}}
                type="password"
                id="cvv"
              />
            </div>
            
            <div className="column-container">
              <label for="zip">Postal code</label>
              <input
                value={postalCode}
                onChange= {(e)=>{setPostalCode(e.target.value)}}
                type="number"
                id="zip"
              />
            </div>
          </div>

          <div className="flex-container">
            <div className="column-container">
              <label for="users">Users</label>
              <input
                value={numUsers}
                onChange= {(e)=>{setNumUsers(e.target.value)}}
                type="number" 
                id="users"
              />
            </div> 

            <div className="column-container">
              <label for="plan">Tier</label>
              <input
                value={tier}
                onChange= {(e)=>{setTier(e.target.value)}}
                type="text"
                id="tier"
                readonly
              />
            </div>            
                      
          </div>          

          <div className="checkbox-container">
            <input 
              onClick= {(e)=>{setActiveUser(e.target.checked)}}
              onChange= {(e)=>{setActiveUser(e.target.checked)}}
              type="checkbox"
              checked={activeUser}
              id="active"
            />
            <label for="active">Active</label>
          </div>

          <input type="submit" value="Save" className="btn btn-primary"/>
          <input type="text" value="Delete" className="btn btn-secondary"/>
        </form>
        {
          error ?
          (
            <div className="error-container">
              {error}
            </div>
          )
          :
          (
            <span></span>
          )
        }
      </main>
    </div>
  )
}
