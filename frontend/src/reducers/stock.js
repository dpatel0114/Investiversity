

let initialState ={
  items: [],
  user:{
    username:'',
    password:'',
    firstname:'',
    lastname:'',
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
    

    case "CHANGE_USER":
      return { ...state, user: {...state.user,['username']: action.username}}
    

    case "CHANGE_PASS":
      return { ...state, user: {...state.user,['password']: action.password}}

    case "LOGOUT":{
      return {...state, logged: action.logged}
    }
    

    case "LOGIN_ERROR":
      return { ...state, error: action.error}
    

    case "LOGIN_SUCCESS":{
      return { ...state, logged: action.logged, remaining_balance: action.user.remaining_balance,
        invested_balance: action.user.invested_balance , portfolio: action.portfolio }
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
      return { ...state, sell_stock:action.sell_stock}
    }

    case "PERSIST_DATA":{
      return {...state,
      portfolio: action.portfolio,
      remaining_balance: action.remaining_balance,
      invested_balance: action.invested_balance}
    }

    case "BUY_STOCK":{

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
      if (state.remaining_balance >= action.payload.total_price){

        let flag = false
        let new_portfolio = state.portfolio
        new_portfolio.map(s => {
          if(s.ticker === action.payload.ticker){
            s.quantity += action.payload.quantity
            s.total_price += action.payload.total_price
            flag= true
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