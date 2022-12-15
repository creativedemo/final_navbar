import React from 'react'
import { Link } from 'react-router-dom'

// ======== CSS ========
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="container">
                <header className="main-header">
                    <div className="logo">
                        <a href="#">LOGO</a>
                    </div>

                    <input type="checkbox" className="menu-btn" id="menu-btn" />

                    <label htmlFor="menu-btn" className="menu-icon">
                        <span className="menu-icon__line"></span>
                    </label>

                    <ul className="nav-links">
                    <li className="nav-link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/plants">Plants</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Header