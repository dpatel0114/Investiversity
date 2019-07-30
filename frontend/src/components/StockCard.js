import React from 'react';
import { Form, Modal ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {buyStock} from '../actions/stockActions';
import { Line } from 'react-chartjs-2';
import  {monthlySnap}  from '../chartFunctions'
import LineChart from '../components/LineChart'
import {NotificationContainer, NotificationManager} from 'react-notifications';




import posed from 'react-pose'
// import Popover from './Popup';
// const COM_API = `https://api-v2.intrinio.com/companies/${props.eachStock.ticker}&api_key=OjFlMjFhNTEzNGI1MWY1MzNiZGRjNjgyNjNjNjFiZmEx`
function StockCard(props) {


 

  const createNotification = (type,e) => {
    return () => {
      console.log('hey')
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'Bought':
          NotificationManager.success(`You Bought ${e.target.quantiy.value} Stocks`,'Notification',3000);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  const buyAndNotify=(e,eachStock, balance)=>{
    props.buyStock(e,eachStock,balance)
     createNotification('Bought',e)

  }


  let obj= props.chartPrice

  // let obj={
  //   "remaining": 1
  // }
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

    fetch(`https://api-v2.intrinio.com/securities/${props.eachStock.ticker}/prices?api_key=OjFlMjFhNTEzNGI1MWY1MzNiZGRjNjgyNjNjNjFiZmEx`)
    .then(res => res.json())
    .then(data => 

      props.getPrice(data.stock_prices))

    setShow(true)
  };

  return (
    <>

            <td>{props.eachStock['ticker']}  </td> 
            <td> <i class="fas fa-dollar-sign"></i> {props.eachStock['close']}</td>
            <td>
              <form class="form-inline" onSubmit={(e)=>buyAndNotify(e,props.eachStock,{"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}>
            
                <Form.Control name="quantity" type="number" step="1" style={{width:'5.5rem'}} min='1' required="required"
                placeholder="Stocks"/> &nbsp;&nbsp;&nbsp;&nbsp;
            
                <Button  data-toggle="button" type="submit" style={{margin: '3px'}}> <i class="fas fa-shopping-cart"></i> &nbsp;&nbsp;Buy </Button>
              
                </form>

            </td>


            <td><i class="fas fa-info-circle float-left fa-lg offset-md-4"  onClick={handleShow}></i></td>

    
      <Modal className="modal fade" data-backdrop="static" focus='true' role="dialog" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Info About {props.eachStock.ticker} </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {/* <img style={{width:"40%", height:"20%"}}src="https://static.seekingalpha.com/uploads/2016/4/7/17225882-14600640903610125_origin.png"/> */}
      {/* {console.log("info:", props.info)} */}

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
          

           <div className="card">
            <div className="card-header">
              Quaterly Summary
            </div>
            <div className="card-body text-center">
             <LineChart/>
            </div>
         </div>


        </Modal.Body>
      </Modal>
</>
  )
}


const mapStateToProps =(state)=>{
  return state.stock
}

const getCompany=(data)=> dispatch=>{
  dispatch({type:'GET_COM_INFO', data: data})
}

const getPrice=(data)=> dispatch=>[
  dispatch({type:'GET_CHART_PRICE', data: data})
]

export default connect(mapStateToProps,{buyStock, getCompany, getPrice})(StockCard);
