import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import LandingPage from '../src/Pages/LandingPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default App;
