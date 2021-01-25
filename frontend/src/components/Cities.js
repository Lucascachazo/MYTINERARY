import React , { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Nav from "./Nav"
import Spiner from  "./Spiner"
import Footer from "./Footer"



const Cities = () => {
    const [filtradoCiudades,setFiltradoCiudades]=useState([])
    const [cities ,setCities]=useState([])
    const [search, setSearch]=useState('')
    const [loaded , setLoaded]=useState(false)
    //   console.log(loaded)

    useEffect(()=>{
        fetch('http://localhost:4000/cities')
        .then (response=>response.json())
        .then(data => {setCities(data.respuesta)
            setFiltradoCiudades(data.respuesta)})
            setLoaded(true)
    },[]) 

    useEffect (()=>{
         setFiltradoCiudades(cities.filter( city =>{
            //  console.log(city) 
          return  (
            city.cityName.toLowerCase().startsWith(search.toLowerCase().trim())
          )
        }))
    },[search])
 
 
    if(loaded === false ){
        return <Spiner/>
    }
        return (
        <div className="contenedorCity"> 
            <Nav/>
            <div className="titleCities">
                <h3>CITIES</h3>
            </div>
        
            <div className="inputBox"><input type="text" className="inputIn" placeholder="Search Cities"
                 onChange={ (e) =>  setSearch(e.target.value)}></input>
            </div>
                 {filtradoCiudades.length === 0 ? <div className="noCities"><p> SORRY, NO CITIES WITH THAT NAME WERE FOUND <br></br> PLASE TRY AGAIN</p>
                    
                 </div> :  filtradoCiudades.map(({cityName ,cityPic,_id}) => {
                                 
                return(
                         
                    <div key={_id} className="cities">
                             <div className="ciudadesImagen" style={{backgroundImage: `url('${cityPic}')`}}>
                            
                                <Link to={`/cities/${_id}`}> <h3 className="ciudadesNombre">{cityName}</h3></Link> 
                            </div>
                    
                        </div>
               )
            })} 
           <Footer/>
        </div>  
        
          
    )
}
 export default Cities
 
 




