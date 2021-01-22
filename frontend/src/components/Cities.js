import React , { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


 const Cities = (props) => {
    const [cities ,setCities]=useState([])
    useEffect(()=>{

        fetch('http://localhost:4000/cities')
        .then (response=>response.json()
        .then(data => setCities(data.respuesta)))



},[]) 

    return (
        <div className="contenedorCity"> 
        {cities.map(({nombre ,url,_id}) => {
    
            return(
                <div key={_id} className="cities">
                    <div className="ciudadesImagen" style={{
                    backgroundImage: `url('${url}')`
                }}>
                     <Link to={`/cities/${_id}`}> <h3 className="ciudadesNombre">{nombre}</h3></Link> 
             </div>
                    
        </div>
         )
    })}
</div>    
    )
}
export default Cities




