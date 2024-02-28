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
            <div className="section">
                <div className="title">
                    <h4 className='title-characters'>Characters</h4>
                </div>
                <div className="content-container">
                    <div className="content">
                        {peopleInfo.map((person, index) => (
                            <People
                                key={index}
                                id={person.id}
                                name={person.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="title">
                    <h4 className='title-planets'>Planets</h4>
                </div>
                <div className="content-container">
                    <div className="content">
                        {planetsInfo.map((planet, index) => (
                            <Planets
                                key={index}
                                id={planet.id}
                                name={planet.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="title">
                    <h4 className='title-starships'>Starships</h4>
                </div>
                <div className="content-container">
                    <div className="content">
                        {starshipsInfo.map((starship, index) => (
                            <Starships
                                key={index}
                                id={starship.id}
                                name={starship.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
