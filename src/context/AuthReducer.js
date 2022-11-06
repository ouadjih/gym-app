const AuthReducer = (state, action) =>{
    // eslint-disable-next-line default-case
    switch(action.type) {
      case'LOGIN':{
        return {
             currentUser: action.payload
        }
      }
      case'LOGOUT':{
        return {
             currentUser: null
        }
      }
    } 
}

export default AuthReducer;