import Carrusel from './Carrusel';

export const Section = () => {


    return (
        <>
        <div id="cajaFlecha">
            <i className="material-icons" id="iconoPag">aswap_horiz</i>
            <h3 className="primerTexto2">Popular MYtineraries</h3>
        </div>
        <div>
        <Carrusel/>
        </div>
        </>
    )
}

export default Section