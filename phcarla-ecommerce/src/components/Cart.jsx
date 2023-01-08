import React, { useContext } from "react";
import {CartContext} from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No products found in the cart.!</div>
                        <Link to={"/"} className="btn">Back to Home Page</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn " title="Emptying the cart">Emptying the cart</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Product</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-center">Price</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.price}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {removeItem(item.id)}} title="Delete Product"><img src={"images/cart.png"} alt={"Delete Product"} width={24} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn " title="End purchase">End Purchase</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;
