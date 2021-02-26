import React, {useState, useEffect} from 'react'
import {db} from '../../firebaseconfig'
import { Link, useLocation } from "react-router-dom";

import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'
import Hidden from '@material-ui/core/Hidden'
import backIconB from '../../img/back-arrow-b.svg'

import './Edit.css'

export default function Edit() {
  const[idUser, setIdUser] = useState('')
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
  const location = useLocation()
  const[allSchools, setAllSchools] = useState([])
  const[oneSchool, setOneSchool] = useState([])

  useEffect(() => {
    const getSchools = async() => {
      const { docs } = await db.collection('schools').get()
      const schoolsArray = docs.map( item => ({ id: item.id, ...item.data() }))
      console.log(schoolsArray)
      setAllSchools(schoolsArray)

      const path = location.pathname
      const idSchool = path.substring(14)
      console.log(idSchool)
      
      const filterSchool = schoolsArray.filter(school=> school.id == idSchool)
      console.log(filterSchool)
      setOneSchool(filterSchool)

      const editUsers = async (id) => {
        try {
          const data = await db.collection('schools').doc(id).get()
          const { imgSchool, school, creditCard, nameCard, expYear, expMonth, cvv, postalCode, numUsers, tier, activeUser } = data.data()
          setImgSchool(imgSchool)
          setSchool(school)
          setCreditCard(creditCard)
          setNameCard(nameCard)
          setExpYear(expYear)
          setExpMonth(expMonth)
          setCvv(cvv)
          setPostalCode(postalCode)
          setNumUsers(numUsers)
          setTier(tier)
          setActiveUser(activeUser)
          setIdUser(id)
          console.log(id)
        }
        catch(err) {
          console.log(err)
        }
      }
      editUsers(idSchool)
    }
    getSchools()
  },[])

  const setUpdate = async(e) => {
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
    const schoolUpdated = {
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
    try {
      await db.collection('schools').doc(idUser).set(schoolUpdated)
      alert("Escuela actualizada correctamente")
    }
    catch(err){
      console.log(err)
    }

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
          <h2>Edit school</h2>        
        </nav>
      </Hidden>

      <main className="container white-container school-form">
        <Hidden only={['sm', 'xs']}>
          <nav className="container nav-container-add">
            <Link to = "/schools">
              <img src={`${backIconB}`} alt=" "/>
            </Link>
            <h2>Add school</h2>        
          </nav>
        </Hidden>
        
        <form onSubmit={setUpdate}>
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

            <input type="submit" value="Update school" className="btn btn-primary"/>

          
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
