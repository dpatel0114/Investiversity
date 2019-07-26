import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';


export class BalanceContainer extends Component {
  render() {
    return (
      <div>
        {/* <Container> */}
      {/* <Card bg='info' text='white' style={{width: '80%', height:'20%', margin:'5px'}}> */}
        {/* <Card.Body> */}
           {/* <h5>Remaining Balance: {this.props.remaining_balance}</h5> */}
           <div class="card grey darken-1" style={{width: '80%', height:'30%', margin:'5px'}}>
           <h5>Remaining Balance</h5> $ {this.props.stock.remaining_balance}
          </div>
        {/* </Card.Body> */}
      {/* </Card> */}
     
      {/* <Card bg='success' text='white' style={{width: '80%', height:'20%', margin:'5px'}}> */}
        {/* <Card.Body>         */}
            {/* <h5>Invested Balance: {this.props.invested_balance}</h5 >  */}
            <div class="card grey darken-1"style={{width: '80%', height:'30%', margin:'5px'}}>
            <h5>Invested Balance</h5>  $ {this.props.stock.invested_balance}         
            </div>
        {/* </Card.Body> */}
      {/* </Card> */}
      
      {/* </Container> */}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {stock: state.stock }
}

export default connect(mapStateToProps)(BalanceContainer)
 