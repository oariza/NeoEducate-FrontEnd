import React, { Component } from 'react'

import Header from '../../components/Header'
import Avatar from '@material-ui/core/Avatar'
import addIcon from '../../img/plus-solid.svg'
import addIconB from '../../img/plus-solid-b.svg'
import chartPie from '../../img/chart-pie-solid.svg'
import chartPieB from '../../img/chart-pie-solid-b.svg'
import cardIcon from '../../img/credit-card-regular.svg'
import starIcon from '../../img/star-solid.svg'
import usersIcon from '../../img/users-solid.svg'
import Hidden from '@material-ui/core/Hidden';

import './Schools.css'

export default class Schools extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Hidden only={['md', 'lg', 'xl']}>
          <nav className="container nav-container">
            <img src={`${chartPie}`} alt=" "/>
            <h2>Schools' list</h2>
            <img src={`${addIcon}`} alt=" "/>          
          </nav>

          <main className="container white-container">
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
            <div className="schoolName-container">
              <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
              <p>School 1</p>
            </div>
          </main>
        </Hidden>

        <Hidden only={['sm', 'xs']}>
          <main className="container white-container">
            <nav className="nav-container nav-web">
              <div className="web-icons">
                <img src={`${chartPieB}`} alt=" "/>
                <p>Insights</p>
              </div>              
              <h2>Schools' list</h2>
              <div className="web-icons">
                <img src={`${addIconB}`} alt=" "/>
                <p>Add school</p>
              </div>                      
            </nav>

            <div className="school-info">
              <div className="list-of-schools">
                <div className="schoolName-container">
                  <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
                  <p>School 1</p>
                </div>
                <div className="schoolName-container">
                  <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
                  <p>School 1</p>
                </div>
                <div className="schoolName-container">
                  <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
                  <p>School 1</p>
                </div>
                <div className="schoolName-container">
                  <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
                  <p>School 1</p>
                </div>
                <div className="schoolName-container">
                  <Avatar alt="School 1" src="/static/images/avatar/1.jpg" className="avatar-img" />
                  <p>School 1</p>
                </div>
              </div>

              <div className="details-of-schools">
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
                        <p className="card-label">USERS</p>
                      </div> 
                    </div>
                  </div> 
                </div>                
              </div>

            </div>


            
          </main>
        </Hidden>
      </div>
    )
  }
}
