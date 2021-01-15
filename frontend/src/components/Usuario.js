import logo from "./assets/logotip.png"
import "materialize-css/dist/css/materialize.min.css"
import  M from "materialize-css"
import { FcHome} from 'react-icons/fc'
import { FcSportsMode} from 'react-icons/fc'
import { FcAssistant} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'

const Usuario =()=>{

    return(
        
        
        <div className="logo">
            
             { <img src={logo} style={{
                 opacity:""
                }} alt=""></img> }
            
            <div className="menu">
                 <a><FcHome style= {{fontSize:"15px"}} /> HOME  </a>
                 <a  href=""><FcSportsMode style= {{fontSize:"15px"}} /> CITIES</a>
                 <a  href=""><FcAssistant style= {{fontSize:"15px"}} /> CONTACT</a>
                 <i class="bi bi-arrow-down-right-square-fill"></i>
                 <a  href=""><FcManager style= {{fontSize:"25px"}} />LOGIN</a>
            </div>
        
        </div> 
        

    );
}

export default Usuario