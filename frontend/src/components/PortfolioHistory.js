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
      <div> &nbsp;
        <h4 align="center"> { this.props.user.firstname } History of Stocks </h4><br/>
        <div align="center">
        <table class="table table-striped table-bordered table-hover col-md-10 text-dark" style={{ border: "double"}}>
            <thead class="thead-dark border-bottom" >
              <tr>
                {/* <th>#</th> */}
                <th> Price </th>
                <th> Quantity </th>
                <th> Ticker </th>
                <th> Total Price </th>
                <th> Buy date </th>
              </tr>
            </thead>

            <tbody >
              {this.props.porthistory.map(p=> {
                return(
                  <tr class= {p.total_price < 0 ?  "table-danger": "table-success"}>
                  {/* <td>#</td> */}
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.ticker}</td>
                  <td>{p.total_price}</td>
                  <td>{p.created_at}</td>
                </tr>)})}      
            </tbody>

          </table>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return  state.stock 
}

export default connect(mapStateToProps,{getPortfolio})(PortfolioHistory);
