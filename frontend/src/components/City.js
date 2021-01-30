import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import Itinerary from './Itinerary'
import {connect} from 'react-redux'
import itinerariesAction from '../redux/actions/itinerariesAction'




export const  City = (props) => {
 const [city , setCity] = useState([])

 const id = props.match.params.id

// console.log(props)
    useEffect (() => {
         props.callItineraries(id)
         const city = props.cities.filter(city =>{
             return ( 
                 city._id === id

             )

         })
         setCity(city[0])


    },[])
//  console.log(city)


console.log(props.allItineraries)

    return (

    <>    
         <div className="elementCity">
        <Nav/>
            <h4 className="titleCity">{city.cityName}</h4 >
            <div>

            <div className="pikCity" style={{
                backgroundImage:`url('${city.cityPic}')`
            }}  />
            {props.allItineraries.map (itinerary =>{
                // console.log(itinerary)
                return <Itinerary itinerary={itinerary}/>


                 
            } )}

             </div>
        </div> 
    </> 
    )
}

const mapStateToProps = state => {
   
    return {
        allItineraries : state.itinerariesReducer.itineraries ,
        cities : state.citiesReducer.cities 

    }
}
const mapDispatchToProps = {
    callItineraries : itinerariesAction.traerItineraries

}

export default connect (mapStateToProps, mapDispatchToProps)(City)


