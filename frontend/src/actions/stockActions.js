
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

export const getPortfolio =()=> dispatch => {
  fetch(`http://localhost:3000/portfolio/user?id=${id}`)
  .then(res => res.json())
  .then(data => 
    localStorage.setItem('my_portfolio',JSON.stringify(data))
    )
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


//  export function handleLogin(e){
//   e.preventDefault()

//   let userObject = {username: this.state.user.username, 
//                     password: this.state.user.password}

//   fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/json', 
//     }, 
//     body: JSON.stringify(userObject)
//   })
//   .then(res => res.json())
//   .then(data => { 
//     console.log(data)
//     if(data.errors){
//       console.log("incorrect password")
//       this.setState({errors: data.errors}, ()=> console.log('errors', this.state.errors))
//     }
//     else {
//       this.setState({...this.state, logged: true})
//       localStorage.setItem('token', data.token)
//       // window.history.pushState()
//       // this.forceUpdate()
//     }
//   })
//   e.target.parentElement.reset()
// }




