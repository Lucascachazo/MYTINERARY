import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import {useState} from 'react'
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
import Swal from 'sweetalert2'


export const Login = (props) => {
    //  console.log(props)
const [usuarioLog , setUsuarioLog]  = useState({})
const [errores, setErrores] = useState([])


    const leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        
        setUsuarioLog({
            ...usuarioLog,
            [campo] : valor
        })
    }
//  console.log(usuarioLog)
    const validarUsuario  = async e =>{

        e.preventDefault() 
        if(usuarioLog.username === '' || usuarioLog.password === '' ) {

            alert ("todos los campos son obligatorios y deben ser completados")
            return false
        }

        const respuesta = await props.loginUser(usuarioLog)

        // console.log(respuesta)
        if(respuesta && !respuesta.success ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "All fields are required",
                
              })        
            }else {
            
            // alert("Welcome to MyTinerary")
             Swal.fire(
                'Welcome To MyTinerary!',
                'Good Job!',
                'success'
              )
        }
   }
   
 
    //respuesta de google
    const responseGoogle = async response => {
        if (response.error) {
            alert("Algo pasó...")
        } else {
            const respuesta = await props.loginUser({
                username: response.profileObj.givenName,
                password: response.profileObj.googleId
            })
        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
        } else {
            Swal.fire(
                'Welcome To MyTinerary!',
                'Good Job!',
                'success'
              )        }
        }
    }      
    return (
    <>

        <Nav/>
        <div className="logContainer">

            <div className = " titleContainer"><h1 className = "title">SIGN IN</h1></div>
            <input className ="account"  name = "username"  type = "text" placeholder = "Enter your user" onChange ={leerInput}></input>
            <input className = "password" type="password" name = "password" placeholder = "Enter your password" onChange ={leerInput}></input>
            <button  className="sendBtn" onClick={validarUsuario}>Log In</button>
            <Link to ="/register" className="register" >Create account</Link>

                <GoogleLogin
                    clientId="56670268622-ujtfv11jtt2esb9qe4cgo4drut70tgu4.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
    </> 
    )
}


const mapStateToProps = (state)=>{

    return{
      loggedUser: state.authReducer.loggedUser
        
    }
}

const mapDispatchToProps = {
    loginUser: authAction.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)







