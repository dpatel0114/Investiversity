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
// console.log(props.eachStock)


  return (
    <div className="card float-md-left">

     {/* <Card  border='dark' bg='light'style={{width:'50%', margin: '5px'}}> */}
       <Card.Body>
         <div classsName="card-text">
            {props.eachStock.ticker}  <br/>
           Price: {props.eachStock.price}<br/>
           Quantity: {props.eachStock.quantity} <br/>
           Amount Invested: {parseFloat(props.eachStock.total_price).toFixed(2)} <br/>
          </div>

          <Form onSubmit={(e) => sellAndUpdate(e,props.eachStock, {"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>
            <Form.Control type='number' step='1' name='quantity' min='1' required="required"/>
          <Button  class="btn btn-primary"data-toggle="button" type="submit" style={{margin: '5px'}}> SELL </Button>
          </Form>
        
      </Card.Body>
    {/* </Card> */}
    </div>

     
  )

}

export const mapStateToProps=(state)=>{
  return state.stock
}
export default connect(mapStateToProps,{sellStock})(PortfolioCard);
