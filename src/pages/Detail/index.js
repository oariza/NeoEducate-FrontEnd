import React, {useState, useEffect} from 'react'
import {db} from '../../firebaseconfig'
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'
import editInfo from '../../img/edit-solid.svg'
import cardIcon from '../../img/credit-card-regular.svg'
import starIcon from '../../img/star-solid.svg'
import usersIcon from '../../img/users-solid.svg'


import './Detail.css'

export default function Detail() {
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
      const idSchool = path.substring(16)
      console.log(idSchool)
      
      const filterSchool = schoolsArray.filter(school=> school.id == idSchool)
      console.log(filterSchool)
      setOneSchool(filterSchool)
    }
    getSchools()
  },[])

  const deleteUsers = async (id) => {
    try{
      await db.collection('schools').doc(id).delete()     
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div>
      <Header/>

      <nav className="container detail-navbar">
        <Link to="/schools">
          <img src={`${backIcon}`} alt=" "/>
        </Link>        
        <h2>School's detail</h2>         
      </nav>

        {
          oneSchool.map(item=> (

            <main key={`${item.id}`} className="container">

              <div className="white-container detail-info">
                <Avatar  alt={`${item.school}`} src={`${item.imgSchool}`} className="avatar-img" />
                <div className="detail-info-text">
                  <h3>{item.school}</h3>
                  <p>Member since: 10/22/2020</p>
                </div>            
              </div>
      
              <div className="white-container">
      
                <div className="card-container line">
                  <img src={`${cardIcon}`} alt=" "/>
                  <div className="card-container-text">

                    <p className="card-label-detail">{item.creditCard}</p>
                    <p className="card-label">CARD NUMBER</p>
                  </div> 
                </div>
      
                <div className="plan-details">
                  <div className="card-container">
                    <img src={`${starIcon}`} alt=" "/>
                    <div className="card-container-text">
                      <p className="card-label-detail">{item.tier}</p>
                      <p className="card-label">TIER</p>
                    </div> 
                  </div>
                  <div className="card-container">
                    <img src={`${usersIcon}`} alt=" "/>
                    <div className="card-container-text">
                      <p className="card-label-detail">{item.numUsers}</p>
                      <p className="card-label">USERS</p>
                    </div> 
                  </div>
                </div>      
              </div> 
              <Link to={`/schools/edit/${item.id}`}>
                <input type="text" value="Edit" className="btn btn-primary"/> 
              </Link>  
              <Link to="/schools">
                <input onClick={(id)=>{deleteUsers(item.id)}} type="text" value="Delete" className="btn btn-secondary"/>    
              </Link>
                   
            </main>

          ))
        }


    </div>
  )
}

