import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn backgroundCartWidget position-relative">
            <img src={"images/cart.png"} alt={"Cart"} width={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">8</span>
        </button>
    )
}

export default CartWidget;