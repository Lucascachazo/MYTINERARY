import axios from 'axios'

 const citiesAction = {

    allCities:() => {
        return async (dispatch , getState) =>{
           
           const respuesta = await fetch('http://localhost:4000/cities/')
           const data = await  respuesta.json()
           dispatch({
                type : 'ALL_CITIES' ,
                payload: data.respuesta   
           })
        }    
    },
    filtrarCities:(valorInput) => {
        return  (dispatch , getState) =>{
 
            dispatch({
                type: 'FILTRAR_INPUT',
                payload: valorInput
            })

         }
    },

    cargarCity:(nuevaCity)=> {
        return async (dispatch, getState) => {
            const token = getState().authReducer.loggedUser ? getState().authReducer.loggedUser.token : ''

            try{
                const respuesta = await axios.post('http://localhost:4000/cities', nuevaCity,{
                    headers: {
                        Authorization: 'Bearer'+token
                    }

              })
            if(!respuesta.data.succsess){
                return respuesta.data
            }
            dispatch({type:'CARGAR_CITY' ,payload: respuesta.data.succsess})
            
        }   catch(errorToken){
                if(errorToken.response.status === 401){
                    alert("debes loguearte para cargar una ciudad")
                }
    
            }
        }
    },
    logFromLS:(token)=> {
        return async (dispatch, getState) =>{
            try{
                const respuesta = await axios.post('http://localhost:4000/user/lstorage', token ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(respuesta.data.succsess){
                    console.log(respuesta)
                }
                dispatch({type: 'LOGIN_USER', payload:{response:{...respuesta.data.response}}})
            }catch(error){
                if(error.response.status=== 401){
                    alert("esta intentando ingresar sin permisos")
                }
            }localStorage.clear()
                return '/'


        }

    }


    
}
export default citiesAction