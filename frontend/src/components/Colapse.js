import React from 'react';

const Colapse= (props) => {
     return ( 
      <>
      <div className="contenedorGeneral">
            {props.itinerary.activities.map(activity => {  
              return (
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

          <div style={{margin:"2vh"}}>
              {props.itinerary.coments.map(comment =>{
                return (
                <>
                    <h5 style={{textAlign:'center', fontFamily:'Yusei Magic, sans-serif'}}>COMMENTS</h5>

                    <div className = "comments">
                      <h6>NAME : {comment.userName}</h6>
                        <h6>COMMENT : " {comment.coment} "</h6>
                        
                    </div>
                    <input className = "inputComment" placeholder="Insert Coment"></input>   
                </>   
                )
            })} 
          </div>
          
      </div>
     </>
                             
 )
}
 
export default Colapse


