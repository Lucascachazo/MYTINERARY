import fotito from "./assets/avion2.jpg"
import Main from "./Main"
// import Nav from "./Nav"

export const ContenedorGral = () => {
    return (
        <div className="divHeader">

            <div className="imagenLogo">
                
                {/* <Nav/> */}
                <img  src={fotito} style={{ width:"100%",marginTop:"2vh"}} alt=""></img>

                <div className="fondoSection">
                    
                    <h4 className="primerTexto">Find your perfect trip , designed by insiders who know and love their cities</h4>

                </div>
                <Main/>

            </div>
            
        </div>
    )
}
export default ContenedorGral
