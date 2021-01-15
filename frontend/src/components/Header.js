import Usuario from "./Usuario"
import fotito from "./assets/avion2.jpg"
import Section from "./Section"

export const Header = () => {
    return (
        <div className="divHeader">
            
            
            <div className="imagenLogo">
                <Usuario/>
                <img  src={fotito} style={{ width:"100%",
            marginTop:"2vh"
            }} alt=""></img>

                 
                 
                 <div className="fondoSection" >
                    <h4   className="primerTexto" >Find your perfect trip , designed by insiders who know and love their cities</h4>

                </div>
                <Section/>

            </div>
            
        </div>
    )
}
export default Header
