
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


    }

}

export default itinerariesAction