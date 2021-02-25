import React, {useState, useEffect} from 'react'
import {db} from '../../firebaseconfig'
import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar'
import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'
import editInfo from '../../img/edit-solid.svg'
import cardIcon from '../../img/credit-card-regular.svg'
import starIcon from '../../img/star-solid.svg'
import usersIcon from '../../img/users-solid.svg'


import './Detail.css'

export default function Detail() {
  const[allSchools, setAllSchools] = useState([])

  useEffect(() => {
    const getSchools = async() => {
      const { docs } = await db.collection('schools').get()
      const schoolsArray = docs.map( item => ({ id: item.id, ...item.data() }))
      console.log(schoolsArray)
      setAllSchools(schoolsArray)
    }
    getSchools()
  },[])


  return (
    <div>
      <Header/>

      <nav className="container nav-container">
        <Link to="/schools">
          <img src={`${backIcon}`} alt=" "/>
        </Link>        
        <h2>School's detail</h2>
        <img src={`${editInfo}`} alt=" "/>          
      </nav>

      <main className="container">
        <div className="white-container detail-info">
          <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img avatar-detail" />
          <div className="detail-info-text">
            <h3>School 1</h3>
            <p>Member since: 10/22/2020</p>
          </div>            
        </div>

        <div className="white-container">

          <div className="card-container line">
            <img src={`${cardIcon}`} alt=" "/>
            <div className="card-container-text">
              <p className="card-label-detail">xxxx xxxx xxxx xx52</p>
              <p className="card-label">CARD NUMBER</p>
            </div> 
          </div>

          <div className="plan-details">
            <div className="card-container">
              <img src={`${starIcon}`} alt=" "/>
              <div className="card-container-text">
                <p className="card-label-detail">Basic</p>
                <p className="card-label">PLAN</p>
              </div> 
            </div>
            <div className="card-container">
              <img src={`${usersIcon}`} alt=" "/>
              <div className="card-container-text">
                <p className="card-label-detail">145</p>
                <p className="card-label">USER</p>
              </div> 
            </div>
          </div> 

        </div>          
      </main>
    </div>
  )
}

