import logo from "./assets/logotip.png"
import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcSportsMode} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"

const Nav =()=>{
    return( 
    <div className="divHeader" >
        <header className="logo">
            {<img src={logo} alt=""></img>}
        <div className="menu">
            <Link to="/"><FcHome  style= {{fontSize:"4.5vh", marginRight:"1vw",}} />HOME</Link>
            <Link to="/cities"><FcSportsMode style= {{fontSize:"4.5vh",marginRight:"1vw"}}/>CITIES</Link>
            <FcManager style= {{fontSize:"4.5vh "}}/><p className="login" style={{color:"white", display:"inline"}}>LOGIN</p>
        </div>
        </header> 
    </div>     
    );
}
export default Nav