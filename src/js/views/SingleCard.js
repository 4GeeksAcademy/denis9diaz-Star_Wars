import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCard = () => {
    const types = { people: "characters", planet: "planets", starship: "starships" }
    const [info, setInfo] = useState({});
    const { id, type } = useParams();
    const imageUrl = `https://starwars-visualguide.com/assets/img/${types[type]}/${id}.jpg`;

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(response => response.json())
            .then(data => { console.log(data.result.properties), setInfo(data.result.properties) })
            .catch(error => error);
    }, [id, type]);

    const properties = () => {
        if (type == "planet") {
            return (
                <div className="properties-card">
                    <p className="diameter">Diameter: {info.diameter}</p>
                    <p className="rotation_period">Rotation Period: {info.rotation_period}</p>
                    <p className="orbital_period">Orbital Period: {info.orbital_period}</p>
                    <p className="population">Population: {info.population}</p>
                    <p className="climate">Climate: {info.climate}</p>
                    <p className="terrain">Terrain: {info.terrain}</p>
                    <p className="mass">Mass: {info.mass}</p>
                </div>
            )
        } else if (type == "people") {
            return (
                <div className="properties-card">
                    <p className="birth_year">Birth Year: {info.birth_year}</p>
                    <p className="eye_color">Eye Color: {info.eye_color}</p>
                    <p className="gender">Gender: {info.gender}</p>
                    <p className="hair_color">Hair color: {info.hair_color}</p>
                    <p className="height">Height: {info.height}</p>
                    <p className="homeworld">Home World: {info.homeworld}</p>
                    <p className="mass">Mass: {info.mass}</p>
                </div>
            )
        } else {
            return (
                <div className="properties-card">
                    <p className="model">Model: {info.model}</p>
                    <p className="starship_class">Starship Class: {info.starship_class}</p>
                    <p className="manufacturer">Manufacturer: {info.manufacturer}</p>
                    <p className="length">Length: {info.length}</p>
                </div>
            )
        }
    }
    console.log(info.population);
    return (
        <div className="container individual-info">
            <div className="row">
                <div className="col image"><img src={imageUrl} className="card-img-top" alt="..."
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }} />
                </div>
                <div className="col individual-text">
                    <h1 className="name">{info.name}</h1>
                    {properties()}
                </div>
            </div>
            <Link to="/">
                <p>Back home</p>
            </Link>
        </div>
    );
};

export default SingleCard;
