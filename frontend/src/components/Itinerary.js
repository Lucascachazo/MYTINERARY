import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty} from "react-icons/io";
import Colapse from './Colapse';



function Itinerary ({itinerary}) {
const {activities,comments,hashtag,hours,likes,price,title,userName,userPic} = itinerary
    return (
        
        <>
           {/* {activities.map( activity =>{
            return(
                <div>
                    {activity.title}
                    {/* {activity.img} */}
                {/* </div>
            )
//  })} */} 
        
<div className="boxItinerary">

    <div className="boxpicUser"> 
        <div  className="picUser"></div>
        <div><h5>{userName}</h5></div>
    </div>

    <div className="titleItinerary">
    <h5 >{title}</h5>
     <div className="acti">
     
  
        
    </div>
     
    </div>
    
    <div>
        <h5 className="duration">Duration: {hours}hs</h5>
        <h5 className="duration">Price:{price}</h5>
        <h5>< IoIosHeartEmpty className="iconH" /> {hours}</h5>
        <h5 className="iconHash" >#{hashtag} {hours}</h5>
                <button>Wiew More</button>
                <Colapse/>


        
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

