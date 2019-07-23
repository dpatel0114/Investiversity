import React, { Component } from 'react'
import {Button, Image} from 'react-bootstrap'

export class Welcome extends Component {
  render() {
    return (
      <div style ={{position: "relative"}}>
       
          {/* </Row> */}
                {/* <img src="http://www.impactiq.org/wp-content/uploads/2018/04/1.png" /> */}

                  <Button name='login' href='/login' style={{position:"absolute", top: "50%", left:"50%"}}> Login </Button>                   
                  <Button name='signup' href='/signup' style={{position:"absolute", top: "50%", left:"30%"}}> Sign Up </Button> 
                  <Image
              src="https://amppob.com/wp-content/uploads/2018/11/investment-stock.jpg"
              style={{height: '100%', width: '100%'}} /> 

      </div>
    )
  }
}

export default Welcome
