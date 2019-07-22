import React from 'react';
import { Container, Card, Form } from 'react-bootstrap';


function StockCard(props) {
  // console.log(props.eachStock)
  
const buyStock =(e)=> {
  e.preventDefault()
  // console.log(e.target)
  let stock ={
    price: parseInt(props.eachStock['05. price']),
    ticker: props.eachStock['01. symbol'],
    quantity: parseInt(e.target.quantity.value),
    total_price: parseInt(props.eachStock['05. price'] * e.target.quantity.value),
    user_id: parseInt(localStorage.uid)
  }
  console.log(stock)

    fetch('http://localhost:3000/portfolios',{
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body:JSON.stringify(stock)
      })
      .then(res => res.json())
      .then(data => data)

  }


  return (
    <Container>
      <Card>
        <Card.Body>
    
          <h5> Ticker: {props.eachStock['01. symbol']}</h5>
          <h6> Price: {props.eachStock['05. price']} </h6>
          {/* <form action="/action_page.php"> */}
           <Form onSubmit={buyStock}> <label> Quantity: </label><input name="quantity" type="number" step="1"></input><br/>
           <button class="btn btn-primary"data-toggle="button" > Buy </button>
           </Form>
           
            {/* </form> */}
            
      </Card.Body>
      </Card>
      </Container>
     
  )
}

export default StockCard;
