// import PortfolioContainer from "../containers/PortfolioContainer";

// import history from './history'
// import {b} from 'react-router';


const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'
const id = localStorage.uid

export const  getStocks = () => dispatch => {
    fetch(API)
    .then(res => res.json())
    .then(data => 
      dispatch({ type: "GET_STOCKS", data: data })
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


export const getUserWithId=()=> dispatch => {
  fetch(`http://localhost:3000/users/${id}`)
  .then(res => res.json())
  .then(data => { 
    localStorage.setItem('portfolio', JSON.stringify(data.portfolio))
    dispatch({ type: 'GET_PORTFOLIO',portfolio: data.portfolio })
  })
}


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
      console.log(data)
      if (data.errors) {
        alert("Sorry, your username or password is incorrect.")
        dispatch({ type: 'SIGNUP_ERROR',errors: data.message })
      }
      else {

        dispatch({ type: 'SIGNUP_ERROR', error:'no'})

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

 export const  handleLogin =(e,history) => dispatch=> {
  e.preventDefault()

  let userObject = {username: e.target.username.value, 
                    password: e.target.password.value}

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json', 
    }, 
    body: JSON.stringify(userObject)
  })
  .then(res => res.json())
  .then(data => { 
    // console.log(data)
    if(data.errors){
      dispatch({type: 'LOGIN_ERROR', error: data.errors})
      localStorage.setItem('logged',false)
      alert(' Incorrect Username or Password! ')
    }
    else {
      history.push('/')
      dispatch({type:'LOGIN_SUCCESS', user: data.user, logged: true})
      localStorage.setItem('logged',true)
      localStorage.setItem('token', data.token)
      localStorage.setItem('uid', data.user.id)
      localStorage.setItem('remainingBalance', data.user.remaining_balance)
      localStorage.setItem('investedBalance',data.user.invested_balance)


    }
  })

}


// BUY STOCK
export const  buyStock =(e, eachStock)=> dispatch=> {
  e.preventDefault()
  // console.log(e.target)
  let stock ={
    price: parseInt(eachStock['05. price']),
    ticker: eachStock['01. symbol'],
    quantity: parseInt(e.target.quantity.value),
    total_price: parseInt(eachStock['05. price'] * e.target.quantity.value),
    user_id: parseInt(localStorage.uid)
  }

  dispatch({type: 'BUY_STOCK', payload: stock})

  }

  /// PATCH REQUEST

  // export const patchRequest= (e,allStock)=>{
  //    fetch(`http://localhost:3000/users/${id}`,{
  //     method: 'PATCH', 
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //       body:JSON.stringify({portfolio: allStock })
  //     })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }
