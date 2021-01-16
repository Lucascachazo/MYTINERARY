import logo from "./assets/logotip.png"
import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcSportsMode} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"

const Usuario =()=>{

    return(
        
        
        <header className="logo">
            
             { <img src={logo} alt=""></img> }
            
            <div className="menu">
                 
                 <Link to="/"><FcHome  style= {{fontSize:"2.5vh"}} />HOME</Link>

                 <Link to="/cities"><FcSportsMode style= {{fontSize:"2.5vh"}}/>CITIES</Link>

                 <Link><FcManager style= {{fontSize:"2.5vh"}}/>LOGIN</Link>

            </div>
        
        </header> 
        

    );
}

export default Usuario