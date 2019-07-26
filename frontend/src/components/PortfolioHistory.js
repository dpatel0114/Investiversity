import React, { Component } from 'react'
import { Card, Table } from 'react-bootstrap';
import { getPortfolio } from '../actions/stockActions';
import { connect } from 'react-redux';
// import 'semantic-ui-css'

export class PortfolioHistory extends Component {


  componentDidMount(){
  
    this.props.getPortfolio()
  }

  render() {
    console.log("histroty", this.props.user.firstname)
    return (
      <div>
        <h4> { this.props.user.firstname } History of Stocks </h4>
        <Table>
            <thead>
              <tr style={{"background-color": "rgb(208, 171, 219)"}}>
                {/* <th>#</th> */}
                <th> Price </th>
                <th> Quantity </th>
                <th> Ticker </th>
                <th> Total Price </th>
                <th> Created At </th>
                

              </tr>
            </thead>

            <tbody >
              {this.props.porthistory.map(p=> {
                return(
                  <tr class="positive">
                  {/* <td>#</td> */}
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.ticker}</td>
                  <td>{p.total_price}</td>
                  <td>{p.created_at}</td>
                </tr>)})}


                
              
            </tbody>

          </Table>
          
                
          {/* pink:      rgb(208, 171, 219)
                green: rgb(167, 215, 54)

                orange:  rgb(215, 193, 54)
                
                rgb(222, 213, 132) */}
        


      </div>
    )
  }
}

function mapStateToProps(state) {

  return  state.stock 
}

export default connect(mapStateToProps,{getPortfolio})(PortfolioHistory);
