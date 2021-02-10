import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcFactory} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'


const Nav =(props)=>{

    if(props.loggedUser){
        var links = <>
              <div><Link to = "/addcity">LOG OUT</Link></div>
              <div><Link to = "/addcity">ADD CITY</Link></div>
        </> 
    }else{
        var links = <>
         <div><Link to = "/login"> <FcManager/>
                    <p className = "login" style = {{
                                    color:"white",
                                    display:"inline"}}>SiGN IN</p></Link></div> 
        
        </>
    }
    
    return( 
        <div className="boxNav" >
            <header className = "logo">
                <div className="menu">
                    {/* <div><Link to = "/addcity">LOG OUT</Link></div>
                    <div><Link to = "/addcity">ADD CITY</Link></div> */}
                    <div><Link to = "/"><FcHome/>HOME</Link></div>  
                    <div><Link to = "/cities"><FcFactory/>CITIES</Link></div>   
                </div>
            </header> 
        </div>     
    );
}


 const mapStateToProps = state  => {
    return {
        loggedUser:state.authReducer.loggedUser
    }
}

export default connect (null , mapStateToProps)(Nav)


