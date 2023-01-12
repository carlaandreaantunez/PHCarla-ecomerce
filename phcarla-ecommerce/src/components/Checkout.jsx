import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form onSubmit={handleSubmit} className="checkoutForm">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{color: 'rgb(151, 17, 17)'}}>Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" onInput={(e) => {setName(e.target.value)}} />
                            {name?.length > 0 ? "" : (<p className="emptyInputText">Complete the area</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{color: 'rgb(151, 17, 17)'}}>Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter your Email" onInput={(e) => {setEmail(e.target.value)}} />
                            {email?.length > 0 ? "" : (<p className="emptyInputText">Complete the area, use @</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label" style={{color: 'rgb(151, 17, 17)'}} >Phone</label>
                            <input type="number" className="form-control" id="phone" placeholder="Enter your Telephone" onInput={(e) => {setPhone(e.target.value)}} />
                            {phone?.length > 0 ? "" : (<p className="emptyInputText">Complete the area</p>)}
                        </div>
                        <button  style={{color: 'rgb(151, 17, 17)'}}  disabled={!name?.length > 0 || !phone?.length > 0 || !email?.length > 0} type="submit" value="submit" onClick={createOrder} className={!name?.length > 0 || !phone?.length > 0 || !email?.length > 0 ? "createOrderButton disabled" : "createOrderButton"} >Generate order</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                    <thead>
                            <tr>
                                <th scope="col">Detail</th>
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
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total Payable</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                <Link to={"/"} className="btn" style={{color: 'red'}} title="Home" >Continue shopping</Link>
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