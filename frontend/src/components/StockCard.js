import React from 'react';
import { Container, Card, Form, Fade, Modal ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {buyStock} from '../actions/stockActions';
// import Popover from './Popup';


function StockCard(props) {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (

<>
      <Card border='dark' bg='light'  style={{width: '50%', margin:'5px'}}>
        <Card.Body>
    
          <h5> Ticker: {props.eachStock['01. symbol']}</h5>
          <h6> Price: {props.eachStock['05. price']} </h6>
       
           <Form onSubmit={(e)=>props.buyStock(e,props.eachStock,{"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}> <label> Quantity: </label>
           <input name="quantity" type="number" step="1" style={{width:'3rem'}} min='1'></input><br/>
           {/* <Row> */}
           <button class="btn btn-primary" data-toggle="button" style={{margin: '3px'}}> Buy </button>

           <button class="btn btn-primary" data-toggle="button" style={{margin: '3px'}} onClick={handleShow}> Info </button>
           {/* </Row> */}
           </Form>
           
            
            
      </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.eachStock['01. symbol']} Weekly Summary </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


     </>
  )
}


const mapStateToProps =(state)=>{
  return state.stock
}

export default connect(mapStateToProps,{buyStock})(StockCard);
