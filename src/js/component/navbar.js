import StarWars from "/src/img/StarWars.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img src={StarWars} alt="Star Wars Logo" className="mr-2" style={{ height: '70px' }} />
                </span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="shadow__btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites <span className="badge badge-pill badge-primary">{store.favorites.length}</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((favorites) => { favorites.name })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
