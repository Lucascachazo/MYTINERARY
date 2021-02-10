import axios from 'axios'

const authAction = {

    registerUser: (nuevoUsuario) => {
       
        return async (dispatch , getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/register', nuevoUsuario)
           
            if (!respuesta.data.success) {
                return respuesta.data
                
            }
            console.log(respuesta.data)
            dispatch({type:'REGISTER_USER' , payload:respuesta.data})
        }
    },

    loginUser : (usuarioLog) => {
        return async (dispatch , getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/signin', usuarioLog)
           
            if (!respuesta.data.success) {
                return respuesta.data
                
            }
            dispatch({type:'LOGIN_USER' , payload:respuesta.data})
           
            console.log(respuesta.data)


     }
    },
    


}

export default authAction




  