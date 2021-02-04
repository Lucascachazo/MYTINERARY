import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcFactory} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"

const Nav =()=>{
    return( 
        <div className="boxNav" >
            <header className = "logo">
                <div className="menu">
                    <div><Link to = "/"><FcHome/>HOME</Link></div>  
                    <div><Link to = "/cities"><FcFactory/>CITIES</Link></div>   
                    <div><Link to = "/login"> <FcManager/>
                    <p className = "login" style = {{
                                    color:"white",
                                    display:"inline"}}>SiGN UP</p></Link></div>   
                </div>
            </header> 
        </div>     
    );
}
export default Nav