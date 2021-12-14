import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from '../src/Pages/Login';
import LandingPage from '../src/Pages/LandingPage'
import RegisterAccount from '../src/Pages/RegisterAccount'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import  Home  from '../src/Pages/Home';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />}
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
      	  <PublicRoute path='/login' authenticated={this.state.authenticated} component={Login}/>
          <PublicRoute path='/RegisterAccount' authenticated={this.state.authenticated} component={RegisterAccount}/>
          <PublicRoute path='/home' authenticated={this.state.authenticated} component={Home}/>

{/* 
          <Route exact path = "/forgot" component={Forgot}></Route>

          <PrivateRoute path="/Geography" authenticated={this.state.authenticated} component={Quiz1}></PrivateRoute> */}

        </Switch>
      </Router>
    );
  }
}

export default App;
