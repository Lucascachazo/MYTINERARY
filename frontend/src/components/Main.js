import SimpleSlider from "./CarruselCities"
import CallToAction from "./CallToAction"
import Footer from "./Footer"

export const Main = () => {
    return (
    <>
        <div id = "cajaFlecha">
             <CallToAction/>
             <h3 className = "primerTexto2" >POPULAR MYTINERARIES</h3>
        </div>
        <div><SimpleSlider/></div>
        <Footer/>    
    </>
 )
}
export default Main