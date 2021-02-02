import React from 'react';

const Colapse= (props) => {
     return ( 
  <>
  {props.itinerary.activities.map(activity => {  
    return(
    <> 
          <div key={activity._id} className="activiDiv" style={{backgroundImage:`url('${activity.img}')`,
              height : "20vh",
              width : "20vw",
              border: "2px solid black",
        }}>
        <h6 className="titulosActividades">{activity.title}</h6></div>
    
    </>
    )
  })} 
  </>
                             
 )}
 
export default Colapse


