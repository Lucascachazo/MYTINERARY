import React from 'react'
import Nav  from './Nav'
import {useState} from 'react'
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
import GoogleLogin from 'react-google-login'
import Swal from 'sweetalert2'




const Register = (props) => {
    // console.log(props)
const [nuevoUsuario , setNuevoUsuario]  = useState({})
const [errores, setErrores] = useState([])


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
        Swal.fire(
            'Form Send!',
            'Good Job!',
            'success'
          )
    
         e.preventDefault() 
         if(nuevoUsuario.name === '' || nuevoUsuario.lastname === '' ) {

             alert ("los campos son obligatorios")
             return false
         }

         const respuesta = await props.registerUser(nuevoUsuario)

         if(respuesta && !respuesta.success ){
            //  alert("hubo un error")
         }else {
            Swal.fire(
                'Form Send!',
                'Good Job!',
                'success'
              )
             }
    }
    // const responseGoogle = (response) => {
    //     console.log(response);
    //   }
    const responseGoogle = async (response) => {
        console.log(response)

        if (response.error) {
            alert("Algo pasó...")
        } else {
            const respuesta = await props.registerUser({
                username: response.profileObj.givenName,
                password: response.profileObj.googleId,
                name: response.profileObj.name,
                lastName: response.profileObj.familyName,
                email: response.profileObj.email,
                country:"Argentina",
                urlPic:response.profileObj.imageUrl

            })
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            } else {
                alert("Usuario nuevo grabado")
            }
        }
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
            <option disabled>Select your Country</option>

                {data.paises.map((pais) =>{

               return (
                   <>
                <option value={pais}>{pais}</option>
               </>)
              })}    
            </select>
              
            <div><button className="sendBtn1" onClick={validarUsuario}>Register</button></div>  
            <div>
            <GoogleLogin className="google"
                    clientId="56670268622-ujtfv11jtt2esb9qe4cgo4drut70tgu4.apps.googleusercontent.com"
                    buttonText="Create Account"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
           
            
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

