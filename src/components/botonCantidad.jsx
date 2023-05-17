import "./styles/botonCantidad.css"
import { useState } from "react";

function BotonCantidad(props){

    let [i,setI] = useState(0);

    function decrease(){
        if(i>0){
            setI(--i);
            props.onChange(i);
        }
    }

    function increase(){
        if(i>=0){
            setI(++i);
            props.onChange(i);
        }
    }

    return (
        <div className="qt-picker">
            <button type="button" disabled={i===0} onClick={decrease} className="btn btn-secondary">-</button>
            <label>{i}</label>
            <button type="button" onClick={increase} className="btn btn-secondary">+</button>
        </div>
    );
}
export default BotonCantidad;