import React from 'react'
import { Link } from 'react-router-dom'


function Itineraris() {
    return (
        <>
        <div className="itineraries">
            <h4><span className="ops">¡Oops!</span> <br/> WE DON'T HAVE ITINERARIES YET</h4>
            <Link to={"/cities"}><button className="buttonClick2"> BACK TO CITIES</button></Link>
            <Link to={"/"}><button className="buttonClick2"> HOME</button></Link>
        </div>
        </>
        
    )
}

export default  Itineraris