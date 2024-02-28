import React, { useState, useEffect } from 'react';
import "../../styles/home.css";
import People from './People';
import Planets from './Planets';
import Starships from './Starships';

export const Home = () => {
    const [peopleInfo, setPeopleInfo] = useState([]);
    const [planetsInfo, setPlanetsInfo] = useState([]);
    const [starshipsInfo, setStarshipsInfo] = useState([]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(response => response.json())
            .then(data => setPeopleInfo(data.results))
            .catch(error => error);

        fetch("https://www.swapi.tech/api/planets")
            .then(response => response.json())
            .then(data => setPlanetsInfo(data.results))
            .catch(error => error);

        fetch("https://www.swapi.tech/api/starships")
            .then(response => response.json())
            .then(data => setStarshipsInfo(data.results))
            .catch(error => error);
    }, []);

    return (
        <div className="container">
            {peopleInfo.map((person, index) => (
                <People
                    key={index}
                    id={person.id}
                    name={person.name}
                />
            ))}

            {planetsInfo.map((planet, index) => (
                <Planets
                    key={index}
                    id={planet.id}
                    name={planet.name}
                />
            ))}

            {starshipsInfo.map((starship, index) => (
                <Starships
                    key={index}
                    id={starship.id}
                    name={starship.name}
                />
            ))}
        </div>
    );
};