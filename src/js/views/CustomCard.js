import React from "react";
import { Link } from "react-router-dom";

const CustomCard = (props) => {
    const imageUrl = `https://starwars-visualguide.com/assets/img/${props.type}s/${props.index}.jpg`;

    return (
        <div className="card translucent-card" key={props.id}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/individual/${props.type}/${props.id}`}>
                        <button className="custom-btn btn-1">Read More</button>
                    </Link>
                    <button className="bookmarkBtn align-self-end">
                        <span className="IconContainer">
                            <svg viewBox="0 0 384 512" height="0.9em" class="icon">
                                <path
                                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                ></path>
                            </svg>
                        </span>
                        <p className="text"></p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
