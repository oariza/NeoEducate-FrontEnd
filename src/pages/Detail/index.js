import React, { Component } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Header from '../../components/Header'
import backIcon from '../../img/back-arrow.svg'
import editInfo from '../../img/edit-solid.svg'
import cardIcon from '../../img/credit-card-regular.svg'
import starIcon from '../../img/star-solid.svg'
import usersIcon from '../../img/users-solid.svg'


import './Detail.css'

export default class Detail extends Component {
  render() {
    return (
      <div>
        <Header/>

        <nav className="container nav-container">
          <img src={`${backIcon}`} alt=" "/>
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
}
