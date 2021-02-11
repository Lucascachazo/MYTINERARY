const initialState = {
    loggedUser: null
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'REGISTER_USER' :
            return {
                ...state ,
                loggedUser: action.payload.response 
            }

        case 'LOGIN_USER' :
        
        localStorage.setItem('username', action.payload.response.username) 
        localStorage.setItem('token', action.payload.response.token)

        // console.log(action.payload.response)

            return {
                ...state ,
                loggedUser: action.payload.response
                
            }
        
        case 'DISCONNECT_USER' :
            localStorage.clear()  
            return {
                ...state ,
                loggedUser:initialState.loggedUser
            } 
          
        default: 
        return state
        
    }

}

module.exports =  authReducer









