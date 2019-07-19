let initialState ={
  items: [],
  user:{
    username:'',
    password:'',
  },
  error:'',
  logged: false



}

export default (state = initialState, action) => {
  switch (action.type){
    case "GET_STOCKS": {
      return { ...state, items: [...state.items, action.data]}
    }

    case "CHANGE_USER":{
      return { ...state, user: {...state.user,['username']: action.username}}
    }

    case "CHANGE_PASS":{
      return { ...state, user: {...state.user,['password']: action.password}}
    }

    case "LOGIN_ERROR":{
      return { ...state, error: action.error}
    }

    case "LOGIN_SUCCESS":{
      return { ...state, logged: action.logged}
    }

    default: {
      return state
    }
  }

}