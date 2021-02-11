import "materialize-css/dist/css/materialize.min.css"
import { FcHome} from 'react-icons/fc'
import { FcFactory , FcButtingIn , FcAddImage} from 'react-icons/fc'
import { FcManager} from 'react-icons/fc'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
// import {useState} from 'react'

const Nav =(props)=>{
    // console.log(props)

    if(props.loggedUser){
        var links = 
        <>
        
            <Link  className="linkI" to = "/addcity"> <FcAddImage/>ADD CITY</Link>
            <Link className="linkI" to = "/"  onClick={()=> props.disconnectUser()}><FcButtingIn/>LOG OUT</Link>
            <Link><div><span className="welcome">Welcome </span>{props.loggedUser.username}</div> </Link>
           

        </> 
    }
    else{
        var links =
        <>
             <Link to = "/login"> <FcManager/>
            <p className = "login" style = {{
                                    color:"white",
                                    display:"inline"}}>SiGN IN</p></Link>
        </>
    }
    if(localStorage.getItem('token')&& !props.loggedUser){

        props.logFromLS(localStorage.getItem('token'))
        // console.log("hola")
    }

    return( 
        
        <div className="boxNav" >
            <header className = "logo">
                <div className="menu">
               
                    <div><Link to = "/"><FcHome/>HOME</Link></div>  
                    <div><Link to = "/cities"><FcFactory/>CITIES</Link></div> 
                    {links}
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
const mapDispatchToProps = {
    disconnectUser:authAction.disconnectUser,
    logFromLS:authAction.logFromLS
  }

export default connect ( mapStateToProps, mapDispatchToProps )(Nav)



