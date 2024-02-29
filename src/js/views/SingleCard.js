import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCard = () => {
    const { id } = useParams();
    const urlPeople = `https://www.swapi.tech/api/people/${id}`
    const urlPlanets = `https://www.swapi.tech/api/planets/${id}`
    const urlStarships = `https://www.swapi.tech/api/starships/${id}`

    useEffect(() => {
        fetch(urlPeople)
            .then(response => response.json())
            .then((data) => { data })
            .catch(error => error);
    }, [urlPeople]);

    useEffect(() => {
        fetch(urlPlanets)
            .then(response => response.json())
            .then((data) => { data })
            .catch(error => error);
    }, [urlPlanets]);

    useEffect(() => {
        fetch(urlStarships)
            .then(response => response.json())
            .then((data) => { data })
            .catch(error => error);
    }, [urlStarships]);

    return (
        <div className="container individual-info">
            <div className="row">
                <div className="col">Columna 1</div>
                <div className="col">Columna 2</div>
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
