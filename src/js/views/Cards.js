import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (option) => {
    const principal = {
        characters: [
            { id: 1, name: 'Persona 1', description: 'Descripción de la persona 1' }
        ],
        vehicles: [
            { id: 1, name: 'Vehículo 1', description: 'Descripción del vehículo 1' }
        ],
        planets: [
            { id: 1, name: 'Planeta 1', description: 'Descripción del planeta 1' }
        ],
    };

    const individualCard = () => {
        const items = principal[option].map((card) => (
            <div className="card" key={card.id}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/individual/${card.id}`}>
                            <button className="btn btn-primary">Learn more</button>
                        </Link>
                        <button className="btn btn-outline-warning align-self-end"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        ));

        return items;
    };

    return (
        <div>
            <h3>Description</h3>
            {individualCard()}
        </div>
    );
}

export default Cards;
