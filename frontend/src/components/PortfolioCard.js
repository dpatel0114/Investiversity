import React from 'react';
import { Container, Card, Button , Form} from 'react-bootstrap';
import {sellStock} from '../actions/stockActions'
import {connect} from 'react-redux'



function PortfolioCard(props) {
    
function sellAndUpdate(e,eachStock) {
  if(e.target.quantity.value <= eachStock.quantity){
    props.sellStock(e, eachStock)
    // export const patchRequest= (e,allStock)=>{
    props.portfolio.map( stock=> {
      fetch(`http://localhost:3000/portfolios/${stock.id})}`,{
        method: 'PATCH', 
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
          body:JSON.stringify(stock)
        })
        .then(res => res.json())
        .then(data => 
          {})
    })
  }else{
    alert("Don't be greedy")
  }
   
  }
  


  return (

      <Card bg='light' style={{width:'55%'}}>
        <Card.Body>
          <h5> Ticker: {props.eachStock.ticker}</h5>
          <h6> Price: {props.eachStock.price} </h6>
          <h6> Quantity: {props.eachStock.quantity} </h6>
          <h6> Amount Invested: {props.eachStock.total_price} </h6>
          {/* <button onClick={() => props.dispatch({type: "SELL_STOCK"})} class="btn btn-primary"data-toggle="button"> SELL </button> */}
          <Form onSubmit={(e) => sellAndUpdate(e,props.eachStock)}>
            <Form.Control type='number' step='1' name='quantity'/>
          <Button  class="btn btn-primary"data-toggle="button" type="submit"> SELL </Button>
          </Form>
        </Card.Body>
     </Card>

     
  )

}

export const mapStateToProps=(state)=>{
  return state.stock
}
export default connect(mapStateToProps,{sellStock})(PortfolioCard);
