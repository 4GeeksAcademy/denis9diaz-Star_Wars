import React, { useState } from 'react';
import "../../styles/home.css";
import Sidebar from './Sidebar';
import Cards from './Cards';

export const Home = () => {
	const [selectedOption, setSelectedOption] = useState("characters");
	const [cardInfo, setCardInfo] = useState([])

	const urlStarWars = ""

	fetch(urlStarWars)
	.then(response => response.json())
	.then(data => {
	  setCardInfo(data)
	})
	.catch(err => err)

	const OptionSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className='container'>
			<div className="container border-bottom border-top border-secondary mb-5 mt-5">
				<nav className="navbar-databank">
					<div className="container-fluid">
						<span className="navbar-brand">BROWSE DATABANK //</span>
					</div>
				</nav>
			</div>
			<div className="container row">
				<div className="col-md-3">
					<Sidebar onSelect={OptionSelect}/>
				</div>
				<div className="col-md-9">
				{cardInfo.map((card, index) => (
					<Cards 
					option={selectedOption}
					key={index}
					id={card.id}
					name={card.name}
					description={card.description}
					/>
				))}
				</div>
			</div>
		</div>
	);
};
