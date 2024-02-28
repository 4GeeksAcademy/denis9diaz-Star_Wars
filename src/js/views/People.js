import React from "react";
import { Link } from "react-router-dom";

const People = (props) => {

    return (
        <div className="card" key={props.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/individual/${props.id}`}>
                        <button className="btn btn-primary">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-warning align-self-end"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

export default People;

