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
                    <p className="name">{info.name}</p>
                    <p className="description"></p>
                </div>
            </div>
            <div className="row">
                <div className="col">Columna 1</div>
                <div className="col">Columna 2</div>
                <div className="col">Columna 3</div>
                <div className="col">Columna 4</div>
                <div className="col">Columna 5</div>
            </div>
            <Link to="/">
                <p>Back home</p>
            </Link>
        </div>
    );
};

export default SingleCard;
