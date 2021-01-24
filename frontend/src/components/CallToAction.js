import React from 'react'
import{Link}from "react-router-dom"

const CallToAction = () => {
 
    return (   
    <div className="callToContein" >
        
        <h1  className="h1CallToAction" >FOR MORE ITINERARIS</h1> 
        
        <Link to={"/cities"}><button className="buttonClick">CLICK HERE!</button></Link>
    </div>
    )
}
export default CallToAction

// CONTENEDOR TITULO Y FOTO CALL TO ACTION---------------------------------------------------
// {<img src={pik} style={{
//     width:"19vw",
//     marginTop:"3vh",}} alt=""></img>}