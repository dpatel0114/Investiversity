import React, { Component } from 'react'
import {Button, Image} from 'react-bootstrap'
import HomeDiv from './HomeDiv';
// import Hero from "../components/Hero"


export class Welcome extends Component {
  render() {
    return (
    //  <div></div>
      
      <div className="home">
        <a class="btn waves-effect" name='login' href='/login' style={{position:"absolute", top: "50%", left:"55%"}}> Login </a>                   
        <Button name='signup' href='/signup' style={{position:"absolute", top: "50%", left:"40%"}}> Sign Up </Button>   
       
        </div>
    )
  }
}

export default Welcome;

// <div style ={{position: "relative"}}>
       
          // <div>

 {/* <Image
               src="https://amppob.com/wp-content/uploads/2018/11/investment-stock.jpg"
               style={{height: '100%', width: '100%', margin: '0%'}} 
              />  */}


              // <div class="hero-text">
  //   <img  src="https://amppob.com/wp-content/uploads/2018/11/investment-stock.jpg" />
  // </div>
// {/* </div>  */}

  // {/* <div class="slider">
    // <ul class="slides">
    //   <li>
    //     <img src="https://lorempixel.com/580/250/nature/1"/>
    //     <div class="caption center-align">
    //       <h3>This is our big Tagline!</h3>
    //       <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
    //     </div>
    //   </li>
    //   <li>
    //     <img src="https://lorempixel.com/580/250/nature/2"/> 
    //     <div class="caption left-align">
    //       <h3>Left Aligned Caption</h3>
    //       <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
    //     </div>
    //   </li>
    //   </ul>
    //   </div> */}
