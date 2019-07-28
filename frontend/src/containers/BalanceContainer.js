import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';


export class BalanceContainer extends Component {
  render() {
    return (
      <div>
        <div>
                {/* <Card bg='info' text='white' style={{width: '100%', height:'20%', margin:'5px'}}> */}

          <div class="card text-white bg-primary mb-3 col-md-7 border-light text-center">
        {/* <Card.Body> */}
        <div class="card-body">
           <h5>Remaining Balance </h5> <i class="fas fa-dollar-sign fa-3x"></i>  &nbsp; <span class="display-4"> {Math.round(this.props.stock.remaining_balance, 2)}</span>
           </div>
        {/* </Card.Body> */}
      </div>
            {/* </Card> */}

     <div class="card text-white bg-success mb-3 col-md-7 border-light text-center">

      {/* <Card bg='success' text='white' style={{width: '100%', height:'20%', margin:'5px'}}> */}
      <div class="card-body">
        {/* <Card.Body>         */}
            <h5> Invested Balance </h5> <i class="fas fa-dollar-sign fa-3x"></i> &nbsp;  <span class="display-4">  {Math.round(this.props.stock.invested_balance, 2)} </span>
            </div>
        {/* </Card.Body> */}
      {/* </Card> */}
      </div>
      
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {stock: state.stock }
}

export default connect(mapStateToProps)(BalanceContainer)
 