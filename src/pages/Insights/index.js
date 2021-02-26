import React from 'react'
import { Link } from "react-router-dom";

import backIcon from '../../img/back-arrow.svg'
import Hidden from '@material-ui/core/Hidden'
import backIconB from '../../img/back-arrow-b.svg'

import Header from '../../components/Header'

import './Insights.css'

export default function Insights() {
  return (
    <div>
      <Header/>

      <Hidden only={['md', 'lg', 'xl']}>
        <nav className="container nav-container-insights">
          <Link to = "/schools">
            <img src={`${backIcon}`} alt=" "/>
          </Link>
          <h2>Insights</h2>
        </nav>
      </Hidden>

      <main className="container">
        <div className="principal-insights-container white-container">  
          <Hidden only={['sm', 'xs']}>
            <nav className="container nav-container-insights">
              <img src={`${backIconB}`} alt=" "/>
              <h2>Insights</h2>
            </nav>
          </Hidden> 
          <div className="white-container insight-container">
            <p className="insight-data">137</p>
            <p className="insight-label">ACTIVE SCHOOLS</p>
          </div>
          <div className="flex-container">          
            <div className="white-container insight-container">
              <p className="insight-data">95.7<span>K</span> </p>
              <p className="insight-label">AVG VIEWS PER WEEK</p>
            </div>
            <div className="white-container insight-container">
              <p className="insight-data">1:34</p>
              <p className="insight-label">AVG TIME PER USER</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

