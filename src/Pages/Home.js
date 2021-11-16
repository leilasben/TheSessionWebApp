import React, { Component } from "react";
//import thesessionlogo from "my-app\src\thesessionlogo.png"
export default class Home extends Component{
    render(){
        return(
        <div className="logo-container">
            <img src={thesessionlogo}/>
            <h1>Welcome to The Session</h1>
        </div>
        );
    }
}