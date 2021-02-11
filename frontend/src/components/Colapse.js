import React from 'react';
import {connect} from 'react-redux'
import itinerariesAction from '../redux/actions/itinerariesAction'
import {useState} from 'react'



const Colapse= (props) => {
  const cityId = props.itinerary.cityId
  const itineraryId = props.itinerary._id


  // console.log(props.itinerary._id)
  //  console.log(id)

  const [comentario , setComentario]=useState({})



const leerinfo = e =>{

    const campo = e.target.name
    const valor = e.target.value

    setComentario({
        ...comentario,
        cityId ,
        itineraryId,
        userImg:'www.google.com' ,
        userName:'Lucas',
        [campo] : valor
    })
}
console.log(comentario)





const sendInfo = async e =>{
    e.preventDefault()


    props.cargaComentarios(comentario)
}
  
// console.log(sendInfo)
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
               <h5 style={{textAlign:'center', fontFamily:'Yusei Magic, sans-serif'}}>COMMENTS</h5>


            <div className="comentFondo" style={{margin:"2vh"}}>
              {props.itinerary.coments.map(comment =>{
                return (
                <>
                    
                    <div className = "comments">
                      <h6 className="inputCom">NAME : {comment.userName}</h6>
                        <h6 className="inputCom" >COMMENT : " {comment.coment} "</h6>
                    </div>
                    
                    
                </>   
                )
            })} 
            <div className="boxInputt">
               <input name="coments" onChange={leerinfo} className = "inputComment" placeholder="Insert Coment"></input>  
               <button onClick={sendInfo} className="btn">Send</button> 
            </div>

          </div>
          
      </div>
     </>
                             
 )
}
const mapStateToprops = state =>{
  return{
      comentario:state.itinerariesReducer.itineraries
  }
}

const mapDispatchToProps = {
  cargaComentarios:itinerariesAction.cargaComentarios
}


export default connect(mapStateToprops,mapDispatchToProps) (Colapse)
 


