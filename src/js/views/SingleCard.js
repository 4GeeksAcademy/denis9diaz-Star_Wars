import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCard = () => {
    const [info, setInfo] = useState({});
    const { id, type } = useParams();
    const imageUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(response => response.json())
            .then(data => setInfo(data.result))
            .catch(error => error);
    }, [id, type]);

    return (
        <div className="container individual-info">
            <div className="row">
                <div className="col image"><img src={imageUrl} className="card-img-top" alt="..." /></div>
                <div className="col individual-text">
                    <h2 className="name">{info.name}</h2>
                    <p className="properties">{info.properties}</p>
                </div>
            </div>
            <Link to="/">
                <p>Back home</p>
            </Link>
        </div>
    );
};

export default SingleCard;
