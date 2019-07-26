import React from 'react';
import {  Card, Button , Form} from 'react-bootstrap';
import {sellStock} from '../actions/stockActions'
import {connect} from 'react-redux'



function PortfolioCard(props) {
    
function sellAndUpdate(e,eachStock,balance) {
  if(e.target.quantity.value <= eachStock.quantity &&  eachStock.quantity > 0 ){
    props.sellStock(e, eachStock, balance)
    // export const patchRequest= (e,allStock)=>{
  //   props.portfolio.map( stock=> {
  //     fetch(`http://localhost:3000/portfolios/${stock.id})}`,{
  //       method: 'PATCH', 
  //       headers:{
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //         body:JSON.stringify(stock)
  //       })
  //       .then(res => res.json())
  //       .then(data => 
  //         {})
  //   })
  // }else{
  //   alert("Don't be greedy")
  // }
   
  }
  
}  
console.log(props.eachStock)


  return (

      // <Card bg='light' style={{width:'100%', margin: '5px'}}>
      //   <Card.Body>
        // <div class="card blue-grey darken-1">
        <div class="card small blue-grey darken-1">

        {/* <div class="card-content white-text">
          <span class="card-title">Stock Bought</span>
          </div> */}
          <h5> Ticker: {props.eachStock.ticker}</h5>
          <h6> Price: {props.eachStock.price} </h6>
          <h6> Quantity: {props.eachStock.quantity} </h6>
          <h6> Amount Invested: {props.eachStock.total_price} </h6>
          {/* <button onClick={() => props.dispatch({type: "SELL_STOCK"})} class="btn btn-primary"data-toggle="button"> SELL </button> */}
          <Form onSubmit={(e) => sellAndUpdate(e,props.eachStock, {"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>
            <Form.Control type='number' step='1' name='quantity' min='1' required="required"/>
          <Button  class="btn btn-primary"data-toggle="button" type="submit" style={{margin: '5px'}}> SELL </Button>
          </Form>
          </div>
          // </div>
    //     </Card.Body>
    //  </Card>

     
  )

}

export const mapStateToProps=(state)=>{
  return state.stock
}
export default connect(mapStateToProps,{sellStock})(PortfolioCard);
