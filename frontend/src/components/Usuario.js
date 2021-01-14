 import logo from "./assets/logotip.png"

import "materialize-css/dist/css/materialize.min.css"
// import  M from "materialize-css"


const Usuario =()=>{

    return(
        
        
        <div className="logo">
             { <img src={logo} style={{
                 opacity:""
                }} alt=""></img> }
            <div className="menu">
                 <a  href="">☀ CITIES</a>
                 <a  href="">✈ FLIGTHS</a>
                 <a  href="">☏ CONTACT</a>
                 <i class="bi bi-arrow-down-right-square-fill"></i>
            </div>
                
                 
            <div className="logo">
                 
            
            </div>
            <i className="material-icons" id="iconos">account_circle</i>
      
        
        </div> 
        

    );
}

export default Usuario