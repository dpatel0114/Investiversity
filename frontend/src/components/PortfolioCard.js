import React from 'react';
import {  Card, Button , Form} from 'react-bootstrap';
import {sellStock} from '../actions/stockActions'
import {connect} from 'react-redux'



function PortfolioCard(props) {
    
function sellAndUpdate(e,eachStock,balance) {
  if(e.target.quantity.value <= eachStock.quantity &&  eachStock.quantity > 0 ){
    props.sellStock(e, eachStock, balance)
   
  }
  
}  
console.log(props.eachStock)


  return (

      <Card bg='light' style={{width:'100%', margin: '5px'}}>
       <Card.Body>
          <h5> Ticker: {props.eachStock.ticker}</h5>
          <h6> Price: {props.eachStock.price} </h6>
          <h6> Quantity: {props.eachStock.quantity} </h6>
          <h6> Amount Invested: {props.eachStock.total_price} </h6>
          <Form onSubmit={(e) => sellAndUpdate(e,props.eachStock, {"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>
            <Form.Control type='number' step='1' name='quantity' min='1' required="required"/>
          <Button  class="btn btn-primary"data-toggle="button" type="submit" style={{margin: '5px'}}> SELL </Button>
          </Form>
        
      </Card.Body>
    </Card>

     
  )

}

export const mapStateToProps=(state)=>{
  return state.stock
}
export default connect(mapStateToProps,{sellStock})(PortfolioCard);
