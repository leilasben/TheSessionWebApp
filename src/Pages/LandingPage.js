import React, { Component } from "react";
import logo from '../images/thesessiontransparent.png'
export default class LandingPage extends Component{
    render(){
        return(
            <div className="container-content">
                <div className="logo">
                    <img src={logo} top="100%" height="100px" width="200px" left="15%"/>
                </div>
            </div>
        );
    }
}