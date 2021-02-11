import React from 'react'
import Nav from './Nav'
import {useState} from 'react'
import {connect} from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import Swal from 'sweetalert2'


const AddCity = (props) => {
    console.log(props)

    const [nuevaCity , setNuevaCity] =useState({})

    const validarUsuario  = async e =>{

        // alert("Formulario Enviado")

        e.preventDefault() 

        if(!nuevaCity.cityName  || !nuevaCity.cityPic  ) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            return false
        }

         const respuesta = await props.enviarCity(nuevaCity)

        if(respuesta && !respuesta.success ){


            alert("hubo un error")

            
        }else {
            Swal.fire(
                'Send a new City!',
                'Good Job!',
                'success'
              )         }
   }


    const leerInput = e => {
        const campo = e.target.name
        const valor = e.target.value
        
        setNuevaCity({
            ...nuevaCity,
            [campo] : valor
        })
        console.log(nuevaCity)
    }

    return (
        
        <>
        <Nav/>
        <h4 className = "titleCity">Send a New City</h4 >

        <div className="selectRegister">
            <input name = "cityName" type = "text" placeholder = "Enter City" onChange={leerInput} ></input>
            <input name = "cityPic" type = "text"  placeholder = "City Pic" onChange={leerInput}></input>
            <button className="butonSend" onClick={validarUsuario}>SEND</button>

        </div>
        </>
    )
}




const mapStateToProps = state => {
    return {
     cities:state.citiesReducer.cities

    }
}

const mapDispatchToProps = {
   
   enviarCity:citiesAction.cargarCity

}



export default connect (mapStateToProps,mapDispatchToProps)(AddCity)

