import React from 'react'
import Nav  from './Nav'
import {useState} from 'react'
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
import GoogleLogin from 'react-google-login'



const Register = (props) => {
const [nuevoUsuario , setNuevoUsuario]  = useState({})

const data = {
    paises :["Argentina", "Brasil","Chile","Peru","Bolivia","Uruguay","Paraguay","Venezuela","Colombia","Ecuador",] 
}


    const leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo] : valor
        })
    }
    // console.log(nuevoUsuario)
    const validarUsuario  = async e =>{
         alert("Formulario Enviado")
         e.preventDefault() 
         if(nuevoUsuario.name === '' || nuevoUsuario.lastname === '' ) {

             alert ("los campos son obligatorios")
             return false
         }

         const respuesta = await props.registerUser(nuevoUsuario)

         if(respuesta && !respuesta.success ){
             alert("hubo un error")
         }else {
             alert("salio bien")
         }
    }
    const responseGoogle = (response) => {
        console.log(response);
      }

    
    return (
        <>
        <Nav/>
        <div className="selectRegister">
            <input name = "name" type = "text" placeholder = "Name" onChange = {leerInput}></input>
            <input name = "lastName" type = "text" placeholder = "Last Name" onChange = {leerInput}></input>
            <input name = "username" type = "text" placeholder = "User Name" onChange = {leerInput}></input>
            <input name = "email"  type = "text" placeholder = "Your email" onChange = {leerInput}></input>           
            <input name = "urlPic" type = "text"  placeholder = "Url Pic" onChange = {leerInput}></input>
            <input name = "password" type = "password"  placeholder = "Enter your password" onChange = {leerInput}></input>
            
            <select onChange = {leerInput} className="select" name="country" >
            <option>Select your Country</option>

                {data.paises.map((pais) =>{

               return (
                   <>
                <option value={pais}>{pais}</option>
               </>)
              })}    
            </select>
              
            <div><button onClick={validarUsuario}>Register</button></div>  
            <GoogleLogin
                    clientId="56670268622-ujtfv11jtt2esb9qe4cgo4drut70tgu4.apps.googleusercontent.com"
                    buttonText="Create Account"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.authReducer.registerUser
    }
    
}


const mapDispatchToProps = {
    registerUser : authAction.registerUser
}

export default connect (mapStateToProps,mapDispatchToProps)(Register)

