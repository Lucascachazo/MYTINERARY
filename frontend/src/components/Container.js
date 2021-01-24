import fotito from "./assets/s (4).jpg"
import Main from "./Main"
 import Nav from "./Nav"

export const Container = () => {
    return (
    <>
        <div className="contenedor">
            <div className="foto">
            <img className="fotopik" src={fotito} />

        </div>
        <div className="texto-encima"><Nav/></div>

        <div className="centrado">FIND YOUR PERFECT TRIP , DESIGNED BY INSIDERS WHO KNOW AND LOVE THEIR CITIES</div>
        </div>

        
        <div className="boxNav">
             

            <div className="imgPrincipal">
                
                
                
                {/* <img  src={fotito} style={{ width:"100%",marginTop:"2vh"}} alt=""> */}
                {/* </img> */}
                
                <div className="backroundFirstText">
                    {/* <h4 className="firstText">FOR MORE ITINERARIES CLICK HERE</h4> */}
                </div>
                <Main/>

            </div>
            
            
            
        </div>
        </>
        
    )
}
export default Container
