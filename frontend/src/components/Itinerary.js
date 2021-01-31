import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty} from "react-icons/io";
import Colapse from './Colapse';



function Itinerary ({itinerary}) {
    console.log({itinerary})

const {activities,comments,hashtag,hours,likes,price,title,userName,userPic} = itinerary
    return (
        
        <>

        
           {/* {activities.map( activity =>{
            return(
                <div>
                    {activity.title}
                {/* </div>
            )
//  })} */} 

<div className="boxItinerary">
    

    <div className="boxpicUser"> 
        <div  className="picUser" style={{backgroundImage:`url('${userPic}')`}} ></div>
        <div ><h5 className="titleUser">{userName}</h5></div>
    </div>

    <div className="titleItinerary">
        <h5 className="titleP">{title}</h5>
        <div className="redes">
            <h5 className="duration">Duration: {hours}hs</h5>
            <h5 className="duration">Price: {price}</h5>
            <h5 className="duration">< IoIosHeartEmpty className="iconH" /> {likes}</h5>
            <h5 className="iconHash" >#{hashtag}</h5>
            {/* <button>Wiew More</button> */}
                {/* <Colapse/> */} 
        </div>
    </div>

        {/* <h5>{hours}</h5>
        
        <h5>{hashtag}</h5>
        <h5>{price}</h5> */}
</div>


        {/* <div className="itineraries"> */}
            {/* <h4><span className="ops">¡Oops!</span> <br/> WE DON'T HAVE ITINERARIES YET</h4>
            <Link to={"/cities"}><button className="buttonClick2"> BACK TO CITIES</button></Link>
            <Link to={"/"}><button className="buttonClick2"> HOME</button></Link> */}
        {/* </div>  */}
        

        </>

        
        
    )
    
}

export default  Itinerary

