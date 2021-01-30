import React from 'react'
import { Link } from 'react-router-dom'


function Itinerary ({itinerary}) {
const {activities,comments,hashtag,hours,likes,price,title,userName,userPic} = itinerary
    return (
        <>
<div>
        <h3>{hours}</h3>
        <h3>{title}</h3>
        <h3>{userName}</h3>
        <h3>{hashtag}</h3>
        <h3>{price}</h3>
</div>

        {/* <div className="itineraries">
            <h4><span className="ops">¡Oops!</span> <br/> WE DON'T HAVE ITINERARIES YET</h4>
            <Link to={"/cities"}><button className="buttonClick2"> BACK TO CITIES</button></Link>
            <Link to={"/"}><button className="buttonClick2"> HOME</button></Link>
        </div> */}
        </>
        
    )
}

export default  Itinerary

