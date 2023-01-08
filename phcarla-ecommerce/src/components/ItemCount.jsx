import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1); /*que empiece el contador en 1*/
    const [itemStock, setItemStock] = useState(stock);
    const [sold, setSold] = useState(false);

    const increaseStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decreaseStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setCounter(1);
        setSold(true);
        onAdd(quantity);
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

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
                    {sold ? <Link to={"/cart"} className="btn btn-outline-primary">Finish my order</Link> : <button className="btn btn-outline-primary" onClick={() => { addToCart(counter) }}>Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;


