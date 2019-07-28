import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import StockContainer from './StockContainer'
import  PortfolioContainer from './PortfolioContainer'
import BalanceContainer from './BalanceContainer';
import { Row, Col } from 'react-bootstrap';
// import NavBar from '../containers/NavBar';
// import SearchContainer from './SearchContainer'
import { connect } from 'react-redux';
// import {persistData} from '../actions/stockActions'



export class DashboardContainer extends Component {

  
 

  render() {

  //   if (localStorage.token !== null){
  //     this.props.persistData()
  // }

  // console.log(this.props)
 
    return (
      <div>
      {/* <div>
        <Form inline onSubmit={this.props.searchStock} class="left hide-on-med-and-down">
          <FormControl name="search" type="text" placeholder="Search" className="mr-sm-2" style={{width:"150px"}}/>       
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
      </div> */}

      {/* <div className="jumbotron text-center general">
        <div className="container">
            <h1 className="jumbotron-heading"> Explore Stocks </h1>
            <p className="lead text-muted"> Select Below </p>
        </div>
      </div> */}
      <div >
        <Row>
          <Col><StockContainer/></Col>
          <Col><PortfolioContainer/></Col>
          <Col><BalanceContainer/></Col>
        </Row>
      </div>
      </div>
    )
  }
}

// const  mapStateToProps = (state) => {
//   return state.stock
// }

export default connect()(DashboardContainer)
// export default connect()(DashboardContainer)