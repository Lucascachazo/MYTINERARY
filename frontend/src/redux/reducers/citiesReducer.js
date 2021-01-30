const initialState= {
    cities : [],
    filterCities:[]
}

const citiesReducer= (state = initialState , action) => {

    switch(action.type){
        case 'ALL_CITIES' :

        return{...state ,  cities: action.payload, filterCities: action.payload}

        case 'FILTRAR_INPUT' :
            
        return{ ...state ,
             valorInput: action.payload , 
             filterCities : state.cities.filter(city => {
                 return ( city.cityName.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
             })
             
             
            
        }
                    

        default :return (state)
                      


        

    }
}


export default citiesReducer
