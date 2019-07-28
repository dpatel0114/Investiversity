import React from 'react';
import { Container, Card, Form, Fade, Modal ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {buyStock} from '../actions/stockActions';
import posed from 'react-pose'
// import Popover from './Popup';


function StockCard(props) {


  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  


  return (



    <>


    <div className="card col-md-7 text-center float-left">
      {/* <Card border='dark' bg='light'  style={{width: '50%', margin:'5px'}}> */}
        <Card.Body>

          <div className="card-text ">
            {props.eachStock['01. symbol']} <br/>
          Price: {props.eachStock['05. price']} 
          </div>
  
           <Form onSubmit={(e)=>props.buyStock(e,props.eachStock,{"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}> <label style={{fontSize: '1rem'}}> Quantity: </label>
           <Form.Control name="quantity" type="number" step="1" style={{width:'9rem'}} min='1' required="required"/>
         
           <Button  data-toggle="button" type="submit" style={{margin: '3px'}}> Buy </Button>
         
           <Button  data-toggle="button" style={{margin: '3px'}} onClick={handleShow}> Info </Button>
           </Form>
           
            
            
          </Card.Body>
      </div>
      {/* </Card> */}

         {/* out blue: "rgb(169, 198, 205)"
         in green: "rgb(167, 209, 191)" */}

      <Modal show={show} onHide={handleClose} style={{background: "rgb(169, 198, 205)", border: "double"}}>
        <Modal.Header closeButton >
          <Modal.Title >{props.eachStock['01. symbol']} Weekly Summary </Modal.Title>
        </Modal.Header >
        <Modal.Body style={{ border: "double"}}>
          {/* <img style={{width:"40%", height:"20%"}}src="https://static.seekingalpha.com/uploads/2016/4/7/17225882-14600640903610125_origin.png"/> */}
          <h6>Price: {props.eachStock['05. price']}</h6>
          <h6>High Price: {props.eachStock['03. high']}</h6>
          <h6>Low Price: {props.eachStock['04. low']}</h6>
          <h6>Volume: {props.eachStock['06. volume']}</h6>
          <h6>Change: {props.eachStock['09. change']}</h6>
          <h6>Change Percentage: {props.eachStock['10. change percent']}</h6>

        </Modal.Body>
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
