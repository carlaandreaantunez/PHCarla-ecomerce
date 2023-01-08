import React from "react";

const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="spinner-border text-secondary" role="status">
                    <div className="spinner-border text-primary" role="status">
                    <div className="spinner-border text-danger" role="status">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;