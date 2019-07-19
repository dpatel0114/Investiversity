import React, { Component } from 'react'
import { Container, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


export class BalanceContainer extends Component {
  render() {
    return (
      <div>
        <Container>
      <Card margin='5rem'>
        <Card.Body>
           <h5>Remaining Balance: {this.props.remaining_balance}</h5>
        </Card.Body>
      </Card>
     
      <Card Padding='5rem'>
        <Card.Body>        
            <h5>Invested Balance: {this.props.invested_balance}</h5>          
        </Card.Body>
      </Card>
      
      </Container>
      </div>
    )
  }
}


function mapStateToProps(state){

  return state.stock
}

export default connect(mapStateToProps)(BalanceContainer)
 