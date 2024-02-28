import React from "react";

const SingleCard = () => {

    return (
        <div className="container card single-card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Learn more</button>
                    <button className="btn btn-outline-warning align-self-end"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;


