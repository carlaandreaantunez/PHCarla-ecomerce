import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [orderId, setOrderId] = useState("");

    const createOrder = () => {
        const date = new Date();
        const order = {
            buyer: {name:name, email:email, phone:phone},
            items: cart.map(item => ({id:item.id, title:item.name, price:item.price, quantity:item.quantity, price_total:item.quantity * item.price})),
            date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Ingrese su name" onInput={(e) => {setname(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Ingrese su Teléfono" onInput={(e) => {setphone(e.target.value)}} />
                        </div>
                        <button type="button" onClick={createOrder} className="btn">Generate order</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total Payable</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;