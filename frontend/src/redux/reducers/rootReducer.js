import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerariesReducer from './ItinerariesReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({

    citiesReducer: citiesReducer ,
    itinerariesReducer: itinerariesReducer,
    authReducer: authReducer,
})

export default rootReducer