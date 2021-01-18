import React from 'react'
import fotitoto from "./assets/clickhere1.png"
import{Link}from "react-router-dom"

const CallToAction = () => {
 
    return (   
    <div className="callToContein" >
        <h1 className="h1CallToAction">FOR MORE ITINERARIS</h1> 
        <Link to={"/cities"}>{<img src={fotitoto} style={{
              width:"19vw",
              marginTop:"3vh",}} alt=""></img>}</Link>
    </div>
    )
}
export default CallToAction

// CONTENEDOR TITULO Y FOTO CALL TO ACTION---------------------------------------------------
