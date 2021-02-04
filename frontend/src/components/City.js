import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import Itinerary from './Itinerary'
import {connect} from 'react-redux'
import itinerariesAction from '../redux/actions/itinerariesAction'
import { Link } from 'react-router-dom'

export const  City = (props) => {
    const [city , setCity] = useState([])
    const id = props.match.params.id


    useEffect (() => {
        props.callItineraries(id)
        const city = props.cities.filter(city =>{
            return ( 
                city._id === id
            )
        })
        setCity(city[0])
    },[])

    
    if( props.cities.length !== 0 ) {
        return (
        <>    
        <div className = "elementCity">
            <Nav/>
            <h4 className = "titleCity">{city.cityName}</h4 >
            <div>
                 <div className = "pikCity" style={{backgroundImage : `url('${city.cityPic}')`}}/>
                    {props.allItineraries.length === 0 
                    
                    ? <div className = "itineraryYet"><p>NO ITINERARIES YET!</p></div> 

                    : props.allItineraries.map (itinerary => {
                                return <Itinerary  itinerary={itinerary}/>         
                    })}
                 <div className = "buttons">
                    <Link to={"/cities"}><button className="buttonClick2"> BACK TO CITIES</button></Link>
                    <Link to={"/"}><button className="buttonClick2"> HOME</button></Link> 
                 </div>
            </div>
        </div> 
    </> 
    )} else {
         props.history.push('/cities')
         return false
    }      
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


