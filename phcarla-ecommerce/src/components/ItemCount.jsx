import React from "react";
import { useState } from "react";
/*import React, { useState } from "react";*/

const ItemCount = ({stockItems}) => {
        /*defino un estado para modificar el componente*/
    const [counter, setCounter] = useState(1); /*que empiece el contador en 1*/
    const [stock, setStock] = useState(stockItems);

    const increaseStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    /*Funcion validacion de stock*/
    const onAdd = () => {
        if (counter <= stock) {
            setStock(stock - counter);
            setCounter(1);
            console.log("Added: " + counter + " products to Cart!");
        }
    }

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={increaseStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;


