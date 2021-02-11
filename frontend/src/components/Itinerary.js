import React from 'react'
import { IoIosHeartEmpty} from "react-icons/io";
import Colapse from './Colapse';
import {useState} from 'react'
import {FaMoneyBill} from "react-icons/fa"
import {FcAlarmClock} from "react-icons/fc"
// import {connect} from 'react-redux'
// import itinerariesAction from '../redux/actions/itinerariesAction'


function Itinerary ({itinerary}) {
    // console.log(itinerary)
    
const {coments,activities,hashtag,hours,likes,price,title,userName,userPic} = itinerary
const [visible, setVisible] =  useState(false)




   return (
<>
    <div className = "contenedorPadre">
       <div className = "contenedorHijo"> 
            <div className = "boxpicUser"> 
                <div  className = "picUser" style = {{backgroundImage:`url('${userPic}')`}} ></div>
                <div ><h5 className = "titleUser">{userName}</h5></div>
            </div>
            <div className = "titleItinerary">
                <h5 className = "titleP">{title}</h5>
                <div className = "redes">
                    <h5 className = "duration"><FcAlarmClock/> {hours}hs</h5>
                    <h5 className = "duration">{Array(price).fill(<FaMoneyBill className="iconM"/>)}</h5>
                    <h5 className = "duration">< IoIosHeartEmpty className ="iconH"/> {likes}</h5>
                    <h5 className = "iconHash" >{hashtag}</h5>
                </div> 
            </div>
        </div> 
       
        
        {!visible ? <div>{activities.map( activity => {
                        <Colapse  activity = {activity} />})}</div>
                        
                  : <div className="divColapse"><Colapse itinerary = {itinerary}/>
                  </div>}
                  
         
        <div>
        {!visible ? <button className="styleBtn" onClick={()=> setVisible(!visible)}>
                     WIEW MORE</button>
                  : <button className="styleBtn" onClick={()=> setVisible(!visible)}>WIEW LESS</button> }  
        </div>
    </div> 
</>
 )
}




export default  Itinerary

