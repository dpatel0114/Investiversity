import React from 'react';
import { Container, Card } from 'react-bootstrap';


function StockCard(props) {

  return (
    <Container>
      <Card>
        <Card.Body>
      {/* // <div class='card'> */}
        {/* // <div class='card-body'> */}
          <h5>{props.eachStock['01. symbol']}</h5>
          <h6>{props.eachStock['05. price']} 
          {/* <form action="/action_page.php"> */}
            <input type="number" step="1"></input>
            {/* </form> */}
            </h6>
          <button class="btn btn-primary"data-toggle="button"> Buy </button>
         
      {/* //  </div> */}
      {/* // </div> */}
      </Card.Body>
      </Card>
      </Container>
     
  )
}

export default StockCard;
