


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

    }}
}

export default citiesAction