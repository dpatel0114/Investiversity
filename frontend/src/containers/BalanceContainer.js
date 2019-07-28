import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Doughnut, Bar } from 'react-chartjs-2'
import Chart from '../components/Chart'

export class BalanceContainer extends Component {
  render() {
    return (
      
        <div className="col-md-10 text-center ">
          <div className="card bg-info text-white shadow  mb-5">
          {/* <Card bg='info' text='white' style={{width: '100%', height:'20%'}}> */}
            <Card.Body>
              <h5>Remaining Balance </h5> $ {Math.round(this.props.stock.remaining_balance, 2)}
              {/* {console.log(parseInt(this.props.stock.remaining_balance))} */}
            </Card.Body>
          {/* </Card> */}
          </div>
        
          <Card bg='success' text='white' style={{width: '100%', height:'20%'}}>
            <Card.Body>        
                <h5> Invested Balance </h5> $ {Math.round(this.props.stock.invested_balance, 2)}
                
            </Card.Body>
          </Card>
          
          <div className="card">
            <div className="card-header text-center" >
             Balance History 
            </div>
            <div className="card-body">
                  <Chart/>
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
 