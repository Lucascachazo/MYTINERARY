import axios from 'axios'

const authAction = {

    registerUser: (nuevoUsuario) => {
       
        return async (dispatch , getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/register', nuevoUsuario)
           
            if (!respuesta.data.success) {
                return respuesta.data
                
            }
            // console.log(respuesta.data)
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
           
            // console.log(respuesta.data)


     }
    },
    disconnectUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'DISCONNECT_USER'})
        }
    },
    logFromLS:(token)=> {
        return async (dispatch, getState) =>{
            try{
                const respuesta = await axios.post('http://localhost:4000/user/lstorage', {token} ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                // if(respuesta.data.success){
                //     console.log(respuesta)
                // }

                dispatch({type: 'LOGIN_USER', payload:{response:{...respuesta.data.response}}})
            }catch(error){
                if(error.response.status=== 401){
                    alert("esta intentando ingresar sin permisos")
                    localStorage.clear()
                     return '/'
                }
            }


        }

    }


}

export default authAction




  