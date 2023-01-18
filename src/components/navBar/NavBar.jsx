

import { Link } from "react-router-dom";
import "./Navbar.css"
import {CardWidget} from "../cardWidget/CardWidget";

const NavBar = ()=>{

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo-navbar" src="" alt="Logo" />
            </div>
            <ul className="navbar">
                <Link className="item-navbar" to="/">Home</Link>
                <Link className="item-navbar" to="/category/hoodies">Hoodies</Link>       
                <Link className="item-navbar" to="/category/remeras">Remeras</Link>
                <Link className="item-navbar" to="/category/jeans">Jeans</Link>
            </ul>  
            <CardWidget/>
        </div>
    );
};

export default NavBar;