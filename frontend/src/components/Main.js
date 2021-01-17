import SimpleSlider from "./CarruselCities"
import CallToAction from "./CallToAction"


export const Main = () => {


    return (
        <>
        <div id="cajaFlecha">

        <CallToAction/>

        <h3 className="primerTexto2">Popular MYtineraries</h3>

        </div>
        <div>
            
        
         <SimpleSlider/>  {/*Carrusel--------*/}
        </div>
        </>
    )
}

export default Main