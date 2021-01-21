import React, { useEffect, useState } from 'react'
const data = [
    {
        _id:"1",
        nombre :"La Falda" , 
        url:"https://i.pinimg.com/originals/bc/46/eb/bc46eb457fbd7c8ed53277debd9e67ce.jpg"
    },

    {
        _id:"2",
        nombre :"Valle Hermoso",
        url: "https://images2.alphacoders.com/709/709048.jpg"

    },
        

    {
        _id:"3",
        nombre :"Villa Giardino",
        url: "https://i.pinimg.com/originals/3e/e0/c5/3ee0c55871480090e1455bc14225d7ab.jpg"

    },

    {
        _id:"4",
        nombre :"La Cumbre",
        url: "https://i.pinimg.com/originals/89/ab/d5/89abd528035cf867f436d148388639d8.jpg"
    },
]

export const  City = (props) => {

    const [city , setCity]= useState({})

    useEffect (() => {
        const id= props.match.params.id
        
        data.map (item => {
            
           if(item._id === id) {
            setCity(item)  

           }
        }



    )})


    return (
        <div className="elementCity">
            <h4 className="titleCity">{city.nombre}</h4 >
            <div >

            <div className="pikCity" style={{
                backgroundImage:`url('${city.url}')`
            }}  />

            </div>
        </div>
    )
}
export default City



