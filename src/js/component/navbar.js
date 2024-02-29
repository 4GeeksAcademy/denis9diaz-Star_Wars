import React from "react";
import { Link } from "react-router-dom";
import StarWars from "/src/img/StarWars.png";

export const Navbar = () => {
    return (
        <nav className="navbar mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img src={StarWars} alt="Star Wars Logo" className="mr-2" style={{ height: '50px' }} />
                </span>
            </Link>
            <div className="ml-auto">
                <button type="button" className="btn btn-warning">Favorites</button>
            </div>
        </nav>
    );
};
