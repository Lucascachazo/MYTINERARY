import logo from "./assets/logotip.png"
import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcSportsMode} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"

const Nav =()=>{
    return( 
    <div className="boxNav" >
        <header className="logo">
            {<img src={logo} alt="logo"></img>}
        <div className="menu">
            <Link to="/"><FcHome  style= {{fontSize:"4.5vh"}} />HOME</Link>
            <Link to="/cities"><FcSportsMode style= {{fontSize:"4.5vh"}}/>CITIES</Link>
            <Link to=""> <FcManager style= {{fontSize:"4.5vh "}}/><p className="login" style={{color:"white", display:"inline"}}>LOGIN</p></Link>
        </div>
        </header> 
    </div>     
    );
}
export default Nav