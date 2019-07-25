import React from 'react';
import { Container, Card, Form, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import {buyStock} from '../actions/stockActions';
// import Popover from './Popup';


function StockCard(props) {


// export default()=> (
//     <Popup trigger={<button> Trigger </button>} position="right center">
//       <div>
//         Popup here
//       </div>
//     </Popup>
//   )


// handlePopup(e){
// consolelog(e)

// }


function dispatchAndUpdate(e,eachStock){
    props.buyStock(e, eachStock)
    // setTimeout(()=> console.log(props.portfolio),2000)
}

    // let portfolio = {'portfolios': props.portfolio}

    // fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`,{
    //   method:'PATCH',
    //   headers:{
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //             },
    //             body:JSON.stringify({'user': portfolio})
    //       })
    //       .then(res=> res.json())
    //       .then(data=> console.log(data))
    // }

  // export const patchRequest= (e,allStock)=>{

  //   if(props.portfolio.length === 0) {
  //     let stock ={
  //       price: parseInt(eachStock['05. price']),
  //       ticker: eachStock['01. symbol'],
  //       quantity: parseInt(e.target.quantity.value),
  //       total_price: parseInt(eachStock['05. price'] * e.target.quantity.value),
  //       user_id: parseInt(localStorage.uid)
  //     }
  //     postRequest(stock)
  //   } 

    //  props.portfolio.map( stock=> {
    //   if(stock.id !== null){
    //     console.log('not working')
    //     fetch(`http://localhost:3000/portfolios/${stock.id}`,{
    //       method: 'PATCH', 
    //       headers:{
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //       },
    //         body:JSON.stringify(stock)
    //       })
          
          // fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`,{
          // method: 'PATCH', 
          // headers:{
          //   'Content-Type': 'application/json',
          //   'Accept': 'application/json'
          // },
          //   body:JSON.stringify({'remaining_balance':props.remaining_balance, 'invested_balance': props.invested_balance})
          // })

//       }else{   

//         console.log(stock)
//         // postRequest(stock)
//     }
//   })
// }

      
// function postRequest(stock){
//   fetch(`http://localhost:3000/portfolios`,{
//     method: 'POST', 
//     headers:{
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//       body:JSON.stringify(stock)
//     })


    // fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`,{
    //   method: 'PATCH', 
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body:JSON.stringify({'remaining_balance':props.remaining_balance, 'invested_balance': props.invested_balance})
    // })
// }

// function popUpBox(e){
//   console.log("popup", e.target)

// }

  return (
    <Container>
      <Card bg='light'  style={{width: '60%', margin:'5px'}}>
        <Card.Body>
    
          <h5> Ticker: {props.eachStock['01. symbol']}</h5>
          <h6> Price: {props.eachStock['05. price']} </h6>
       
           <Form onSubmit={(e)=>dispatchAndUpdate(e,props.eachStock)}> <label> Quantity: </label>
           <input name="quantity" type="number" step="1" style={{width:'3rem'}} min=''></input><br/>
           {/* <Row> */}
           <button class="btn btn-primary" data-toggle="button" style={{margin: '3px'}}> Buy </button>

           <button class="btn btn-primary" data-toggle="button" style={{margin: '3px'}} 
          //  onClick={e=> this.props.popUpBox(this.props)}
           > Info </button>
           {/* </Row> */}
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
