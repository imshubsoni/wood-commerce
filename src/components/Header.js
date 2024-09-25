import { useState } from "react";
import "../utils/styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <div className="header">
            {/* Hamburger icon -- using it to toggle the menu -- Show & Hide */}
            <div className="nav-menu-icon" onClick={toggleMenu}>
                <div className="nav-bar nav-bar-full"></div>
                <div className="nav-bar nav-bar-full"></div>
                <div className={`nav-bar ${showMenu ? 'nav-bar-half' : 'nav-bar-full'}`}></div>
            </div>
            { showMenu && 
                <nav className="navigation-menu">
                    <ul className="nav-menu-left">
                        {/* Adding link to home button -- it will navigate to products listing page from anywhere */}
                        <Link to={"/"}>
                            <li><a href="#" className="nav-menu-item">Home</a></li>
                        </Link> 
                        {/* Rest all are dummy buttons */}
                        <li><a href="#" className="nav-menu-item">Shop</a></li>
                        <li><a href="#" className="nav-menu-item">Magazine</a></li>
                    </ul>
                    <ul className="nav-menu-right">
                        <li><a href="#" className="nav-menu-item"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href="#" className="nav-menu-item"><i class="fa-solid fa-cart-shopping"></i></a></li>
                        <li><a href="#" className="nav-menu-item">Login</a></li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default Header;