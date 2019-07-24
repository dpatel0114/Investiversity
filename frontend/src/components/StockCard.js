import React from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import {connect} from 'react-redux'
import {buyStock} from '../actions/stockActions'


function StockCard(props) {


function dispatchAndUpdate(e,eachStock){
    
    props.buyStock(e, eachStock)
  // export const patchRequest= (e,allStock)=>{

    if(props.portfolio.length === 0) {
      let stock ={
        price: parseInt(eachStock['05. price']),
        ticker: eachStock['01. symbol'],
        quantity: parseInt(e.target.quantity.value),
        total_price: parseInt(eachStock['05. price'] * e.target.quantity.value),
        user_id: parseInt(localStorage.uid)
      }
      postRequest(stock)
    } 

    props.portfolio.map( stock=> {
      if(stock.id !== null){
        fetch(`http://localhost:3000/portfolios/${stock.id}`,{
          method: 'PATCH', 
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
            body:JSON.stringify(stock)
          })

          fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`,{
          method: 'PATCH', 
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
            body:JSON.stringify({'remaining_balance':props.remaining_balance, 'invested_balance': props.invested_balance})
          })

      }else{   
        console.log('checking')
        postRequest(stock)
    }
  })
}

      
function postRequest(stock){
  fetch(`http://localhost:3000/portfolios`,{
    method: 'POST', 
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
      body:JSON.stringify(stock)
    })


    fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`,{
      method: 'PATCH', 
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify({'remaining_balance':props.remaining_balance, 'invested_balance': props.invested_balance})
    })
}
  



  return (
    <Container>
      <Card bg='light'  style={{width: '50%', margin:'5px'}}>
        <Card.Body>
    
          <h5> Ticker: {props.eachStock['01. symbol']}</h5>
          <h6> Price: {props.eachStock['05. price']} </h6>
       
           <Form onSubmit={(e)=>dispatchAndUpdate(e,props.eachStock)}> <label> Quantity: </label>
           <input name="quantity" type="number" step="1" style={{width:'3rem'}}></input><br/>
           <button class="btn btn-primary"data-toggle="button" > Buy </button>
           </Form>
           
            
            
      </Card.Body>
      </Card>
      </Container>
     
  )
}


const mapStateToProps =(state)=>{
  return state.stock
}

export default connect(mapStateToProps,{buyStock})(StockCard);
