import React, { Component } from 'react'
import { Container, Card, Col } from 'react-bootstrap';


export class BalanceContainer extends Component {
  render() {
    return (
      <div>
        <Container>
      <Card margin='5rem'>
        <Card.Body>
           <h5>Remaining Balance: $1000</h5>
        </Card.Body>
      </Card>
     
      <Card Padding='5rem'>
        <Card.Body>        
            <h5>Invested Balance: $1000</h5>          
        </Card.Body>
      </Card>
      
      </Container>
      </div>
    )
  }
}


export default BalanceContainer
 