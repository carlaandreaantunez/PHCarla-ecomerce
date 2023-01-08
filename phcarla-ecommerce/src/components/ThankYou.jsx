import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>Thank you for your purchase!</h1>
                        <p>Your Purchase Number is: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn">Back to Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;