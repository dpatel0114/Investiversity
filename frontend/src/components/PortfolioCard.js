import React from 'react';
import { Container, Card } from 'react-bootstrap';


function PortfolioCard(props) {
    
  function sellStock(e, eachStock){

    e.preventDefault()
    eachStock.remove()
    // console.log(eachStock)
    // props.portfolio.includes(eachStock.id) ?  eachStock.remove() : null
    props.splice(eachStock, 1)
   // localStorage.clear()

  }

  return (
    <Container>
      <Card>
        <Card.Body>
   
          <h5> Ticker: {props.eachStock.ticker}</h5>
          <h6> Price: {props.eachStock.price} </h6>
          <h6> Quantity: {props.eachStock.quantity} </h6>
          <h6> Amount Invested: {props.eachStock.total_price} </h6>


          {/* <button onClick={() => props.dispatch({type: "SELL_STOCK"})} class="btn btn-primary"data-toggle="button"> SELL </button> */}
          <button onClick={(e)=> sellStock(e,props.eachStock)} class="btn btn-primary"data-toggle="button"> SELL </button>

        
      </Card.Body>
      </Card>
      </Container>
     
  )
}

export default PortfolioCard;
