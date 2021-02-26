import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

import Login from './pages/Login'
import Schools from './pages/Schools';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Insights from './pages/Insights';
import Edit from './pages/Edit';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/schools"
          component={Schools}>
            <Schools/>
          </Route>
          <Route exact path="/schools/form"
          component={Add}>
            <Add/>
          </Route>
          <Route exact path="/schools/edit/:id"
          component={Edit}>
            <Edit/>
          </Route>
          <Route exact path="/schools/detail/:id"
          component={Detail}>
            <Detail/>
          </Route>
          <Route exact path="/schools/insights"
          component={Insights}>
            <Insights/>
          </Route>

        </div>
      </BrowserRouter>
      
    )
  }
}

