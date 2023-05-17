import { useState } from "react";
import "./styles/product.css"
import BotonCantidad from "./botonCantidad";

function Product(props){

    const [quantity,setQuantity] = useState(0);

    function onQuantityChange(qty){
        setQuantity(qty);
    }

    function handleAddClick(){
        let prodsForCart = {...props.data};
        prodsForCart.quantity = quantity;
    }

    return (
        <div className="product">
            <h5>{props.data.title}</h5>
            <img src={"/images/"+props.data.image} alt=''/>
            <div className="prices">
                <label>Price: ${props.data.price}</label>
                <label>Total: ${(props.data.price*quantity).toFixed(2)}</label>
            </div>
            <div className="picker">
                <BotonCantidad onChange={onQuantityChange}></BotonCantidad>
            </div>
            <div className="add">
                <button className="btn btn-primary" onClick={handleAddClick}>Add</button>
            </div>
        </div>
    );
}
export default Product;