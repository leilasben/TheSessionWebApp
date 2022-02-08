import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Login from '../src/Pages/Login';
import LandingPage from '../src/Pages/LandingPage'
import RegisterAccount from '../src/Pages/RegisterAccount'
import Home from '../src/Pages/Home';
import Tunes from '../src/Pages/Tunes';
import Events from '../src/Pages/Events';
import Recordings from '../src/Pages/Recordings';

import { getAuth, onAuthStateChanged } from "firebase/auth";


function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Redirect to='/' />
        : <Component {...props} />}
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }
  
  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }
  render(){
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
      	  <PublicRoute path='/login' component={Login}/>
          <PublicRoute path='/RegisterAccount' component={RegisterAccount}/>
          <PrivateRoute path='/home' authenticated={this.state.authenticated} component={Home}/>
          <PrivateRoute path='/tunes' authenticated={this.state.authenticated} component={Tunes} />
          <PrivateRoute path='/events' authenticated={this.state.authenticated} component={Events} />
          <PrivateRoute path='/recordings' authenticated={this.state.authenticated} component={Recordings} />


        </Switch>
      </Router>
    );
  }
}

export default App;
