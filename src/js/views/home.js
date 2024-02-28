import React, { useState } from 'react';
import "../../styles/home.css";
import Sidebar from './Sidebar';
import DescriptionCard from './DescriptionCard';

export const Home = () => {
	const [selectedOption, setSelectedOption] = useState("characters");

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
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Sidebar onSelect={OptionSelect} />
					</div>
					<div className="col-md-9">
						<DescriptionCard option={selectedOption} />
					</div>
				</div>
			</div>
		</div>
	);
};
