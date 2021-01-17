import React, { Component } from "react";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const fotos = [

        {nombre :"Atenas" , url:"atenas.jpg"},
        {nombre :"Buenos Aires" , url:"buenosAires.jpg"},
        {nombre :"Cordoba" , url:"cordoba.jpg"},
        {nombre :"London" , url:"londres.jpg"},
        {nombre :"Madrid" , url:"madrid.jpg"},
        {nombre :"Moscow" , url:"moscu.jpg"},
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
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1900,
      fade: true ,
      pauseOnDotsHover:false,
      // dots: true,
    };


  return (
    <div>
        <Slider {...settings}>
            
          {fotos.map(foto => {
          const fotito = require (`../cities/${foto.url}`)
          // console.log(fotos.map)
          
      return(
            
            <div key={foto.nombre}  className="carrusel">

                <div className="divCarrusel" style={{backgroundImage:`url("${fotito.default}")`,height:"40vh",backgroundSize:"cover",margin:"2vh"}}><div style={{height:"20vh"}}>
                  
                  <h3 style={{}} className="tituloCiudades">{foto.nombre}</h3>

                 </div>

             </div>
         </div>
        
            )
            })}

          </Slider>
    </div>

    );
  }
}