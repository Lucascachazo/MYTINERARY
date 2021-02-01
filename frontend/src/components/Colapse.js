import React from 'react';
import {useState} from 'react'

const Colapse= (props) => {
  // console.log(props)
  const {activities,comments,hashtag,hours,likes,price,title,userName,userPic} = props.itinerary
  const [visible, setVisible] =  useState(false)

  return (
     <>
 
    <div className="btnColapse">
      <div >
          <button o className="styleBtn" onClick={()=> setVisible(!visible)}>WIEW MORE</button>
          {visible && <div>
            {activities.map( activity =>{
      return( 
      <div>
        
        <div className="activiDiv" style={{backgroundImage:`url('${activity.img}')` ,
         height:"15vh" ,
         width:"60vw",
         padding:"4vh"
         }}>{activity.title}</div>
      </div>
      )
       
    })
    }
          {/* <div className="activiDiv" style={{backgroundImage:`url('${activities[0].img}')`,height:"20vh"}} > */}

          {/* </div> */}
          </div>}

      </div>

    </div>
    </>
  )
}

export default Colapse

       