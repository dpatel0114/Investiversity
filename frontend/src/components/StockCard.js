import React from 'react';
import { Container, Card, Form, Fade, Modal ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {buyStock} from '../actions/stockActions';

import posed from 'react-pose'
// import Popover from './Popup';
// const COM_API = `https://api-v2.intrinio.com/companies/${props.eachStock.ticker}&api_key=OjFlMjFhNTEzNGI1MWY1MzNiZGRjNjgyNjNjNjFiZmEx`
function StockCard(props) {
  // console.log("hey", props.eachStock)
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = ()=> {
    fetch(`https://api-v2.intrinio.com/companies/${props.eachStock.ticker}?api_key=OjFlMjFhNTEzNGI1MWY1MzNiZGRjNjgyNjNjNjFiZmEx`)
    .then(res=> res.json())
    .then(data => 
    //  getCompany(data)
      props.getCompany(data)

    )

    setShow(true)
  };

  return (

      <div class="card text-white bg-secondary border-light" >
        <div class="card-body">
        {/* {console.log("this one", props.info)} */}
          <h6>  {props.eachStock['ticker']}  &nbsp; <i class="fas fa-info-circle float-right fa-lg" onClick={handleShow}></i>    </h6>
          <h6> <i class="fas fa-dollar-sign"></i>  {props.eachStock['close']} </h6>   
              
           <form class="form-inline" onSubmit={(e)=>props.buyStock(e,props.eachStock,{"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>

           <Form.Control name="quantity" type="number" step="1" style={{width:'5.5rem'}} min='1' required="required"
           placeholder="Stocks"/> 
           <Button  data-toggle="button" type="submit" style={{margin: '3px'}}> <i class="fas fa-shopping-cart"></i> &nbsp;Buy </Button>
         
           </form>
           

      </div>
      {/* <Card> */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title> Info About {props.eachStock.ticker} </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "double"}}>
          {/* <img style={{width:"40%", height:"20%"}}src="https://static.seekingalpha.com/uploads/2016/4/7/17225882-14600640903610125_origin.png"/> */}
      {console.log("info:", props.info)}

          <h6>Ticker: {props.info.ticker}</h6>
          <h6>Company Name: {props.info.name}</h6>
          <h6>CEO: {props.info.ceo}</h6>
          <h6>State: {props.info.hq_state}</h6>
          <h6>Country: {props.info.hq_country}</h6>
          <h6>Price: {props.eachStock.close}</h6>
           <h6>High Price: {props.eachStock.high}</h6>
           <h6>Low Price: {props.eachStock.low}</h6>
           <h6>Volume: {props.eachStock.volume}</h6>
          <h6>Description: {props.info.short_description}</h6>
           
           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </Card> */}
      </div> 

  )
}


const mapStateToProps =(state)=>{
  return state.stock
}

const getCompany=(data)=> dispatch=>{
  dispatch({type:'GET_COM_INFO', data: data})
}


export default connect(mapStateToProps,{buyStock, getCompany})(StockCard);
