import Carrusel from "./Carrusel"
import fotitoto from "./assets/clickhere1.png"
import SimpleSlider from "./CarruselCities"
// import { Carousel } from "materialize-css"


export const Section = () => {


    return (
        <>
        {/* <Carrusel/> */}

        <div id="cajaFlecha">

        {<img src={fotitoto} style={{ width:"19vw", marginTop:"3vh",}} alt=""></img>}
        <h3 className="primerTexto2">Popular MYtineraries</h3>
        
        </div>
        <div>
            
        
        <SimpleSlider/>
        </div>
        </>
    )
}

export default Section