let initialState ={
  items: []
}

export default (state = initialState, action) => {
  switch (action.type){
    case "GET_STOCKS": {
      return { ...state, items: [...state.items, action.data]}
    }
    default: {
      return state
    }
  }

}