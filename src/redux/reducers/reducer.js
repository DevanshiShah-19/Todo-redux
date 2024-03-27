const Initial_State={
  User_data:[]
}

export const todoreducers=(state=Initial_State,action)=>{
  switch(action.type){
    case "ADD_DATA":
      return{
        ...state,
        User_data:[...state.User_data,action.payload]
      }
    case "RMV_DATA":
      const dltdata=state.User_data.filter((ele,k)=>k!==action.payload)
      return {
        ...state,
        User_data: dltdata
      }
    default:
      return state
  }
}