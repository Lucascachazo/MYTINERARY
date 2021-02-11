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
            // console.log(token)
            try{
                const respuesta = await axios.post('http://localhost:4000/cities', nuevaCity,{
                    headers: {
                        Authorization: `Bearer ${token}`                    
                    }

              }
              )
            //   console.log(respuesta)
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
    }


    
}
export default citiesAction