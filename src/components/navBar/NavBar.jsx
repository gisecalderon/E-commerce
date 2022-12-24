

import "./Navbar.css"

const NavBar = ()=>{

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo-navbar" src="" alt="Logo" />
            </div>
            <ul className="navbar">
                <li className="item-navbar">Hoodies</li>       
                <li className="item-navbar">Remeras</li>
                <li className="item-navbar">Jeans</li>
            </ul>  
            <cardWidget />
        </div>
    );
};

export default NavBar;