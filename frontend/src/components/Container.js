import fotito from "./assets/fotologo.png"
import Main from "./Main"
 import Nav from "./Nav"

export const Container = () => {
    return (
    <>
        <div className="contenedor">
            <div className="foto">
            <img className="fotopik" src={fotito} alt="foto"/>

        </div>
        <div className="texto-encima"><Nav/></div>

        <div  className="centrado "  >FIND YOUR PERFECT TRIP , DESIGNED BY INSIDERS WHO KNOW AND LOVE THEIR CITIES</div>
        </div>

        
        <div className="boxNav">
             

            <div className="imgPrincipal">
                
                
                
                <div className="backroundFirstText">
                </div>
                <Main/>

            </div>
            
            
            
        </div>
        </>
        
    )
}
export default Container
