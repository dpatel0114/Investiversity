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


export const getPortfolio =()=> dispatch => {
  fetch(`http://localhost:3000/portfolio/user?id=${id}`)
  .then(res => res.json())
  .then(data => 
    localStorage.setItem('my_portfolio',JSON.stringify(data))
    )
}


export const getUserWithId=()=> dispatch => {
  fetch(`http://localhost:3000/users/${id}`)
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('portfolio', JSON.stringify(data.portfolio))
  })
}


export const handleSignUp=(e)=> disptach => {
    
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
        disptach({ type: 'SIGNUP_ERROR',errors: data.message })
      }
      else {

        disptach({ type: 'SIGNUP_ERROR', error:'no'})

        localStorage.setItem('token', data.token)
        // browserHistory.push('/login')
        // this.props.history.push('/login')
        // history.push('/login')

      }
    })
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
    console.log(data)
    if(data.errors){
      dispatch({type: 'LOGIN_ERROR', error: data.errors})
      localStorage.setItem('logged',false)
      alert(' Incorrect Username or Password! ')
    }
    else {

      dispatch({type:'LOGIN_SUCCESS', user: data.user})
      localStorage.setItem('logged',true)
      localStorage.setItem('token', data.token)
      localStorage.setItem('uid', data.user.id)
      localStorage.setItem('remainingBalance', data.user.remaining_balance)
      localStorage.setItem('investedBalance',data.user.invested_balance)
      history.push('/')


    }
  })

}




