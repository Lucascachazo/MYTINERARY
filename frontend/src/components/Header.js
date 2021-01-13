import Usuario from "./Usuario"
import fotito from "./assets/travel9.jpg"
export const Header = () => {
    return (
        <div className="divHeader">
            
            <div className="imagenLogo">
            <Usuario/>
                <img src={fotito} style={{
                    height:"60vh",
                    width:"100%",
                    opacity:"0.8",
                    border:"1px solid black"

                }} alt=""></img>
                 <div className="fondoSection">
                    <h4 className="primerTexto">Find your perfect trip , designed by insiders who know and love their cities</h4>

            
                </div>
            </div>
            
        </div>
    )
}
export default Header
