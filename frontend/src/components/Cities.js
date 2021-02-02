import React , { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Nav from "./Nav"
import Spiner from  "./Spiner"
import Footer from "./Footer"
import citiesAction from "../redux/actions/citiesAction"
import {connect} from 'react-redux'

const Cities = (props) => {
    useEffect(() => {
        props.callCities()
    },[]) 

    const [loaded , setLoaded]=useState(false)

    useEffect(() => {
        return setLoaded    
    })

    if(loaded === false ){
        return <Spiner/>
    }
    return (
        <div className="contenedorCity"><Nav/>
                <div className="titleCities">
                    <h3>CITIES</h3>
                </div>
        
            <div className = "inputBox"><input type= "text" className = "inputIn" placeholder = "SearchCities"  onChange = { (e) =>  props.leerInput(e.target.value)}></input>
            </div> 
           
            {props.filterCities.length === 0 ? 
                <div className = "noCities"><p> SORRY, NO CITIES WITH THAT NAME WERE FOUND <br></br> PLEASE TRY AGAIN</p>
                    
            </div> : 
             
             props.filterCities.map(({cityName ,cityPic,_id}) => { 
                return(
                 <div key={_id} className="cities">
                    <div className = "ciudadesImagen" style={{backgroundImage: `url('${cityPic}')`}}>
                        <Link to = {`/cities/${_id}`}> <h3 className = "ciudadesNombre">{cityName}</h3></Link> 
                    </div>
                    
                 </div>
                )
            })}  
            <Footer/>
        </div>       
    )
}

const mapStateToProps = state  => {
    return {
        allCities: state.citiesReducer.cities,
        filterCities:state.citiesReducer.filterCities
    }
}

const mapDispatchToProps = {
    callCities : citiesAction.allCities,
    leerInput: citiesAction.filtrarCities

}

export default connect (mapStateToProps,mapDispatchToProps)(Cities)




