import React from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import {connect} from 'react-redux'
import {buyStock} from '../actions/stockActions'

function StockCard(props) {


function dispatchAndUpdate(e,eachStock){
  props.buyStock(e, eachStock)
  // export const patchRequest= (e,allStock)=>{
    fetch(`http://localhost:3000/portfolios/user_id=${localStorage.uid}`,{
     method: 'PATCH', 
     headers:{
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
       body:JSON.stringify({ portfolio: props.portfolio })
     })
     .then(res => res.json())
     .then(data => console.log(data))
     
//  }

}

  // console.log(props.eachStock)
  
// const buyStock =(e)=> {
//   e.preventDefault()
//   // console.log(e.target)
//   let stock ={
//     price: parseInt(props.eachStock['05. price']),
//     ticker: props.eachStock['01. symbol'],
//     quantity: parseInt(e.target.quantity.value),
//     total_price: parseInt(props.eachStock['05. price'] * e.target.quantity.value),
//     user_id: parseInt(localStorage.uid)
//   }
//   console.log(stock)

//     fetch('http://localhost:3000/portfolios',{
//       method: 'POST', 
//       headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//         body:JSON.stringify(stock)
//       })
//       .then(res => res.json())
//       .then(data => data)

//   }


  return (
    <Container>
      <Card bg='info' text='white' style={{width: '14rem', margin:'5px'}}>
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
