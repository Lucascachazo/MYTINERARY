import React, { Component } from "react";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import pik from "../cities/atenas.jpg"


const fotos = [

        {nombre :"Atenas" , url:"atenas.jpg"},
        {nombre :"Buenos Aires" , url:"buenosAires.jpg"},
        {nombre :"Cordoba" , url:"cordoba.jpg"},
        {nombre :"Londres" , url:"londres.jpg"},
        {nombre :"Madrid" , url:"madrid.jpg"},
        {nombre :"Moscu" , url:"moscu.jpg"},
        {nombre :"Paris" , url:"paris.jpg"},
        {nombre :"Petra" , url:"petra.jpg"},
        {nombre :"Rome" , url:"roma.jpg"},
        {nombre :"Sydney" , url:"sydney.jpg"},
        {nombre :"TelAviv" , url:"telAviv.jpg"},
        {nombre :"Toronto" , url:"toronto.jpg"},
      
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "slider",
      centerPadding:"90px",
      infinite: true,
      slidesToShow: 1,
      rows: 2,
      slidesPerRow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1800,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          
          {fotos.map(foto => {
                 const fotito = require (`../cities/${foto.url}`)
            console.log(fotito)

          return(
            <div className="carrusel">

              < div className="divCarrusel" style={{   
               backgroundImage:`url("${fotito.default}")`,
               height:"40vh",
               backgroundSize:"cover",
                }}><h3 className="tituloCiudades">{foto.nombre}</h3>

               </div>
            </div>
      
           )
           })}

        </Slider>
      </div>
    );
  }
}