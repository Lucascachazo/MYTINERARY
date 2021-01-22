import React, { useEffect, useState } from 'react'

export const  City = (props) => {
const [city , setCity]= useState({})

    useEffect (() => {
         const id= props.match.params.id
         fetch('http://localhost:4000/cities/'+id)
        .then (response=>response.json())
        .then(data => setCity(data.respuesta))
     },[])

    return (
        <div className="elementCity">
            <h4 className="titleCity">{city.nombre}</h4 >
            <div>

            <div className="pikCity" style={{
                backgroundImage:`url('${city.url}')`
            }}  />

             </div>
        </div>
    )
}
export default City



