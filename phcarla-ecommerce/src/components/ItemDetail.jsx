import React from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    
    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.image} className="img-fluid" alt={item.name} />
                <h1>{item.name}</h1>
                <p><h5>{item.description}</h5></p>
                <p><h6>{item.vat}</h6></p>
                <p><b>${item.price}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} /> 
            </div>
        </div>
    )
}

export default ItemDetail;