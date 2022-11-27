import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="container py-5">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <a className="text-footer" href="/"><img src={"images/logo_camera.png"} alt={"Logo PH Carla"} width={35} />PH Carla</a>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/facebook-circle-logo-24.png"} alt="Facebook" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/instagram-alt-logo-24.png"} alt="Instagram" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/youtube-logo-24.png"} alt="YouTube" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/twitter-logo-24.png"} alt="Twitter" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;