import React from 'react';
import {  Card, Button , Form} from 'react-bootstrap';
import {sellStock} from '../actions/stockActions'
import {connect} from 'react-redux'



function PortfolioCard(props) {
    
function sellAndUpdate(e,eachStock,balance) {
  if(e.target.quantity.value <= eachStock.quantity &&  eachStock.quantity > 0 ){
    props.sellStock(e, eachStock, balance)
    let remainingStock = eachStock.quantity - e.target.quantity.value
    if (remainingStock ===0){
      e.target.parentElement.remove()
    }
  }
  e.target.reset()
  
}  
// console.log(props.eachStock)

  return (

<div class="card text-white bg-secondary border-light ">
        <div class="card-body">
       {/* <Card  border='dark' bg='light'style={{width:'50%', margin: '5px'}}> */}
        {/* <Card.Body> */}
          <h5>  {props.eachStock.ticker} &nbsp; &nbsp; <i class="fas fa-dollar-sign"></i> {props.eachStock.price} </h5>
          <h6>
           Stocks: {props.eachStock.quantity} &nbsp; &nbsp;
           Total: {parseFloat(props.eachStock.total_price).toFixed(2)} </h6>
          <form  class="form-inline" onSubmit={(e) => sellAndUpdate(e,props.eachStock, {"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>
           <div>
            <input class="form-control mr-sm-2 col-md-6" type='number' 
            step='1' name='quantity' min='1' required="required" placeholder="Stocks"/>
          <button  class="btn btn-primary"data-toggle="button" type="submit" style={{margin: '5px'}}> SELL </button>
          </div>
          </form>
        
       {/* </Card.Body> */}
        {/* </Card> */}
        </div>
        </div>


     
  )

}

export const mapStateToProps=(state)=>{
  return state.stock
}
export default connect(mapStateToProps,{sellStock})(PortfolioCard);
