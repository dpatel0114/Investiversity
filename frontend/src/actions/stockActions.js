// import PortfolioContainer from "../containers/PortfolioContainer";

// import history from './history'
// import {b} from 'react-router';
// **import Popup from 'reactjs-popup'
// let symbl;
// const real_api = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbl}&apikey=18BGJDXOZO2QLLIU`
const API = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`
const id = localStorage.uid
// const all_symbols = ['AAPL','MSFT','V',' GOOGL', 'AMZN']
// const all_symbols = ['AAPL','MSFT','V','GOOGL', 'AMZN']
const all_symbols = ['MSFT']



export const getStocks = () => dispatch => {
    
   all_symbols.map(symbl => 
    fetch(API)
    // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbl}&apikey=18BGJDXOZO2QLLIU`)
    .then(res => res.json())
    .then(data => 
      dispatch({ type: "GET_STOCKS", data: data })
      )
    )
}



export const handleChange = (e) => dispatch=>{
  // console.log(e.target.name)
  e.target.name ==='username'?
  dispatch(
    { type: 'CHANGE_USER', 'username': e.target.value}
  ) 
  : 
  dispatch(
      { type: 'CHANGE_PASS', 'password': e.target.value}
    ) 
  
}

// **export const popup =()=> dispatch=> {
//       <Popup trigger={<button> Trigger </button>} position="right center">
//         <div>
//           Popup here
//         </div>
//       </Popup>
//     }

// export const getPortfolio =()=> dispatch => {
//   fetch(`http://localhost:3000/portfolio/user?id=${id}`)
//   .then(res => res.json())
//   .then(data =>   
//     {       localStorage.setItem('my_portfolio',JSON.stringify(data.portfolio))

//       // console.log(data)
//       // dispatch({ type: 'sGET_PORTFOLIO',portfolio: data.portfolio })
//     }
//     )
// }


// export const getUserWithId =()=> dispatch => {
//   fetch(`http://localhost:3000/users/${id}`)
//   .then(res => res.json())
//   .then(data => { 
//     console.log('user', data)
//     localStorage.setItem('portfolio', JSON.stringify(data.portfolio))
//     dispatch({ type: 'GET_PORTFOLIO',portfolio: data.portfolio })
//   })
// }


export const handleSignUp=(e)=> dispatch => {
    
  e.preventDefault()
  // console.log(e.target.firstname.value)

  let newUserObject ={
    firstname: e.target.firstname.value,
    lastname: e.target.lastname.value,
    username: e.target.username.value,
    password: e.target.password.value,
    email: e.target.email.value
  }
 
  fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
    body:JSON.stringify({ user: newUserObject})
    })
    .then(res=> res.json())
    .then(data => {

      if (data.errors) {
        alert("Sorry, your username or password is incorrect.")
        dispatch({ type: 'SIGNUP_ERROR',errors: data.message })
      }
      else {

        // dispatch({ type: 'SIGNUP_ERROR', error:'no'})

        localStorage.setItem('token', data.token)
        // browserHistory.push('/login')
        // this.props.history.push('/login')
       
        // history.push('/login')
      }
    })
}

 export const searchStock =(e) => dispatch => {
  e.preventDefault()
  console.log(e.target)
  fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo")
  .then(res => res.json())
  .then(data => dispatch({
    type: 'SEARCH_STOCK',
    payload: data["bestMatches"]
  }))
 }

 export const  handleLogin =(e, user,history) => dispatch=> {
  e.preventDefault()

  // console.log("User info: ", user)

  // let userObject = {username: e.target.username.value, 
  //                   password: e.target.password.value}

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json', 
    }, 
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => { 

    if(data.errors){
      dispatch({type: 'LOGIN_ERROR', error: data.errors})
      localStorage.setItem('logged',false)
      alert('Incorrect Username or Password! ')
    }
    else {

      history.push('/dashboard')
      localStorage.setItem('logged',true)
      localStorage.setItem('token', data.token)
      localStorage.setItem('uid', data.user.id)
      localStorage.setItem('portfolio',JSON.stringify(data.user.portfolios))
      localStorage.setItem('reamining_balance', data.user.remaining_balance)
      localStorage.setItem('invested_balance', data.user.invested_balance)
      
      dispatch({type:'LOGIN_SUCCESS', user: data.user, logged: true, portfolio: data.user.portfolios})
      // debugger
     

    }
  })

}


// BUY STOCK
export const buyStock = (e, eachStock, balance)=> dispatch=> {
  e.preventDefault()
  // console.log(e.target)
  
  let stock ={
    price: parseInt(eachStock['05. price']),
    ticker: eachStock['01. symbol'],
    quantity: parseInt(e.target.quantity.value),
    total_price: parseInt(eachStock['05. price'] * e.target.quantity.value),
    user_id: parseInt(localStorage.uid)
  }

  let user ={
    remaining_balance: balance.remaining_balance - stock.total_price,
    invested_balance: balance.invested_balance + stock.total_price
  }
  
  fetch(`http://localhost:3000/portfolios`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({portfolio: stock})
    })
  
    fetch(`http://localhost:3000/users/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Token":localStorage.getItem('token')
      },
        body: JSON.stringify({user: user})
      })
      .then(res=> res.json()
    .then(data=> console.log(data)))
    


  dispatch({type: 'BUY_STOCK', payload: stock})
  e.target.reset()

  }


// Persist portfolio and balance
// export const persistData =()=> dispatch=>{
//   console.log('running')

//   fetch(`http://localhost:3000/users/${id}`)
//   .then(res => res.json())
//   .then(data=> 
//     {console.log(data)
//   dispatch({type:'LOGIN_SUCCESS', user: data.user, logged: true, portfolio: data.user.portfolios})}

//   )
// }

// logout
export const handleLogout=(e, history)=> dispatch=>{
  localStorage.clear()
  // console.log(history)
  history.push('/') 
  dispatch({
    type: 'LOGOUT',
    logged: false
  })
}


export const  sellStock = (e, eachStock,balance)=> dispatch=> {
  e.preventDefault()
  // console.log(e.target)
  let stock ={
    price: parseInt(eachStock.price),
    ticker: eachStock.ticker,
    quantity: -parseInt(e.target.quantity.value),
    total_price: -parseInt(eachStock.price * e.target.quantity.value),
    user_id: parseInt(localStorage.uid)

  }


  let user ={
    remaining_balance: balance.remaining_balance + stock.total_price,
    invested_balance: balance.invested_balance - stock.total_price
  }
  

  
  fetch(`http://localhost:3000/portfolios`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({portfolio: stock})
    })

    fetch(`http://localhost:3000/users/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Token":localStorage.getItem('token')
      },
        body: JSON.stringify({user: user})
      })
      .then(res=> res.json()
    .then(data=> console.log(data)))


  dispatch({type: 'SELL_STOCK', payload: stock})
  e.target.reset()

  }