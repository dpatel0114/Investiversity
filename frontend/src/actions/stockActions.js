
import {dispatch} from 'redux';

const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'

export function getStocks(){
  return fetch(API)
    .then(res => res.json())
    
}

 export function handleLogin(e){
  e.preventDefault()

  let userObject = {username: this.state.user.username, 
                    password: this.state.user.password}

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
      console.log("incorrect password")
      this.setState({errors: data.errors}, ()=> console.log('errors', this.state.errors))
    }
    else {
      this.setState({...this.state, logged: true})
      localStorage.setItem('token', data.token)
      // window.history.pushState()
      // this.forceUpdate()
    }
  })
  e.target.parentElement.reset()
}




