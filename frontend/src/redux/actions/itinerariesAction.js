import axios from 'axios'


const itinerariesAction = {
    traerItineraries:(id) =>{
        return async (dispatch,getState) =>{
            const respuesta = await fetch('http://localhost:4000/itineraries/'+id)
            const data = await  respuesta.json()
            dispatch({
                  type: 'ALL_ITINERARIES',
                  payload: data.respuesta
             })     
        }
    },
    cargaComentarios: comentario => {
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/itineraries/',comentario)

            if(respuesta.data.success === true){
             const respuesta = await  axios.get('http://localhost:4000/itineraries/'+comentario.cityId)
             dispatch(
                 {
                     type: 'ALL_ITINERARIES',
                     payload:respuesta.data.respuesta
    
                 }
             )
            }
        }
       

    }
}
export default itinerariesAction