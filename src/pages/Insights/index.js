import React, { Component } from 'react'

import Header from '../../components/Header'

import './Insights.css'

export default class Insights extends Component {
  render() {
    return (
      <div>
        <Header/>
        <nav className="container nav-container-insights">
          <h2>Insights</h2>
        </nav>

        <main className="container">
          <div className="white-container insight-container">
            <p className="insight-data">137</p>
            <p className="insight-label">ACTIVE SCHOOLS</p>
          </div>
          <div className="white-container insight-container">
            <p className="insight-data">95.7<span>K</span> </p>
            <p className="insight-label">AVG VIEWS PER WEEK</p>
          </div>
          <div className="white-container insight-container">
            <p className="insight-data">1:34</p>
            <p className="insight-label">AVG TIME PER USER</p>
          </div>
        </main>


      </div>
    )
  }
}
