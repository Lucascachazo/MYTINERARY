import logo from "./assets/logotip.png"
import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcFactory} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"

const Nav =()=>{
    return( 
    <div className="boxNav" >
        <header className="logo">
            {/* {<img src={logo} alt="logo"></img>} */}
        <div className="menu">
            <div><Link to="/"><FcHome  style= {{}} />  HOME</Link></div>  
            <div><Link to="/cities"><FcFactory style= {{}}/>  CITIES</Link></div>   
        <div><Link to=""> <FcManager style= {{}}/><p className="login" style={{color:"white", display:"inline"}}>  SiGN UP</p></Link></div>   
        </div>
        </header> 
    </div>     
    );
}
export default Nav