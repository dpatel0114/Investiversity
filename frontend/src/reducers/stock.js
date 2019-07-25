

const initialState = {
  items: [],
  user: {
    username:'',
    email: ''
  },
  remaining_balance: '',
  invested_balance:'',
  error:'',
  logged: false,
  bestMatches:[],
  portfolio: [], 
  sell_stock: []

}

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_STOCKS': 
      return { ...state, items: [...state.items, action.data]}
    
      case 'TEST':
        console.log('hey')
      return {...state}
    

    // case "CHANGE_USER":
    //   return { ...state, user: {...state.user, username: action.username}}

    // case "CHANGE_PASS":
    //   return { ...state, user: {...state.user, password: action.password}}

    case "LOGOUT":{
      return {...state, logged: action.logged}
    }
    

    case "LOGIN_ERROR":
      return { ...state, error: action.error}

    case "UPDATE_BALANCE":
      return {...state, remaining_balance: action.payload.remaining_balance, invested_balance: action.payload.invested_balance,
             logged: true, portfolio: action.payload.portfolios}
    

    case "LOGIN_SUCCESS":
      // debugger
      return { ...state, logged: action.logged, remaining_balance: action.user.remaining_balance,
        invested_balance: action.user.invested_balance , portfolio: action.portfolio, user: {...state.user, username: action.user.username, email: action.user.email, firstname: action.user.firstname, lastname: action.user.lastname}
      }
    
    case "SIGNUP_ERROR":{
      return { ...state, error:action.error}
    }

    case "SEARCH_STOCK":{
      return { ...state, bestMatches: action.payload}
    }
    case "GET_PORTFOLIO":{
      return { ...state, portfolio: action.portfolio }
    }
    case "SELL_STOCK":{

      let new_portfolio = state.portfolio
        new_portfolio.map(s => {
          if(s.ticker === action.payload.ticker){
            s.quantity -= action.payload.quantity
            s.total_price -= action.payload.sell_price
          }})
      
      return { ...state, portfolio:new_portfolio,
        remaining_balance: state.remaining_balance + action.payload.sell_price,
        invested_balance: state.invested_balance - action.payload.sell_price,}
    }

    case "PERSIST_DATA":{
      return {...state,
      portfolio: action.portfolio,
      remaining_balance: action.remaining_balance,
      invested_balance: action.invested_balance}
    }

    case "BUY_STOCK":{

      
      if (state.remaining_balance >= action.payload.total_price){

        let flag = false
        let new_portfolio = state.portfolio
        new_portfolio.map(s => {
          if(s.ticker === action.payload.ticker){
            console.log(s.total_price)
            console.log(action.payload)
            // console.log(s.quantity)
            s.quantity += action.payload.quantity
            console.log(s.quantity)
            s.total_price += action.payload.total_price
            console.log(s.total_price)
            flag = true
          }})
        return {
          ...state,
          remaining_balance: state.remaining_balance - action.payload.total_price,
          invested_balance: state.invested_balance + action.payload.total_price,
          portfolio: flag? new_portfolio : [...state.portfolio,action.payload]
        }

      }else{
        alert('Not Enough Balance')
      }

   
    }

    default: 
      return state
    
  }

}

// ** buystock **
// if (action.payload.total_price <= state.remaining_balance){
  //   let stockIndex = state.portfolio.findIndex(s => s.ticker === action.payload.ticker)
  //   let new_portfolio = state.portfolio
  //   if (stockIndex !== -1) {
  //     new_portfolio[stockIndex].quantity += action.payload.quantity
  //     new_portfolio[stockIndex].total_price += action.payload.total_price
  //   }else{
  //     new_portfolio.push(action.payload)
  //   }


  //   return { ...state, portfolio: new_portfolio}
  // }else{
  //   alert('Not Enough Balance')
  // }