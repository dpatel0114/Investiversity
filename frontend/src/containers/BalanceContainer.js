import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';


export class BalanceContainer extends Component {
  render() {
    return (
      <div>
        <Container>
      <Card bg='info' text='white' style={{width: '80%', height:'20%', margin:'5px'}}>
        <Card.Body>
           {/* <h5>Remaining Balance: {this.props.remaining_balance}</h5> */}
           <h5>Remaining Balance</h5> $ {this.props.remaining_balance}

        </Card.Body>
      </Card>
     
      <Card bg='success' text='white' style={{width: '80%', height:'20%', margin:'5px'}}>
        <Card.Body>        
            {/* <h5>Invested Balance: {this.props.invested_balance}</h5 >  */}
            <h5>Invested Balance</h5>  $ {this.props.invested_balance}         

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
 