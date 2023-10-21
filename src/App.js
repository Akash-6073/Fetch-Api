import './App.css';
import Fetch from './Components/Fetch';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
     <>
     <h1 style={{textAlign:"center", margin:"15px",textDecoration:"underline" , textUnderlineOffset:"9px" , color:"green"}}>TASK - IV</h1>
     <h1 style={{textAlign:"center", margin:"15px"}}>Dummy Data</h1>
     <Fetch/>
     </>
    )
  }
}