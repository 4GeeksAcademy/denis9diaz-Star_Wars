import React from 'react';

function DescriptionCard({ option }) {
    const descriptions = {
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

    const createDescriptionCards = () => {
        const items = descriptions[option].map((item) => (
            <div className="card" key={item.id}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Learn more</button>
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
            {createDescriptionCards()}
        </div>
    );
}

export default DescriptionCard;
