import React from "react";

const CardApp = () => {
    return (
        <div className="container backgroundCard">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img className="portrait" src={"images/portrait_1.jpg"} alt={"Portrait 1"} width={250} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h3 className="text-card">This is some of what we do:</h3>
                            <p><a href="/events" target={"_blank"} rel="noreferrer"><img src={"images/events.jpg"} alt={"Events"} width={75} /></a>
                                <a href="/architecture" target={"_blank"} rel="noreferrer"><img src={"images/building.png"} alt={"Arquitecture"} width={150} /></a>
                                <a href="/products" target={"_blank"} rel="noreferrer"><img src={"images/products.jpg"} alt={"Products"} width={112} /></a>
                                <a href="/portrait" target={"_blank"} rel="noreferrer"><img src={"images/portrait.png"} alt={"Portrait"} width={70} /></a>
                                <ul className="text-ul">
                                    <p></p>
                                    <li>Birthdays, weddings, graduations, baby showers and others.</li>
                                    <li>Photography of buildings, construction sites, real estate projects.</li>
                                    <li>Make up photography, food, jewelry, accessories and others.</li>
                                    <li>Portraits of people and animals.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardApp;