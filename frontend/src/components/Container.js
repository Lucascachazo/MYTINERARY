import fotito from "./assets/avion2.jpg"
import Main from "./Main"
// import Nav from "./Nav"

export const Container = () => {
    return (
        <div className="boxNav">

            <div className="imgPrincipal">
                
                {/* <Nav/> */}
                <img  src={fotito} style={{ width:"100%",marginTop:"2vh"}} alt=""></img>

                <div className="backroundFirstText">
                    <h4 className="firstText">Find your perfect trip , designed by insiders who know and love their cities</h4>
                </div>
                <Main/>

            </div>
            
        </div>
    )
}
export default Container
