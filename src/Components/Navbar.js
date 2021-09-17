import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div>
                    <div className="navbar-container">
                        <Link className='navbar-logo'>
                            DEVATHON
                        </Link>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                                <li className='nav-item'>
                                    <Link className='nav-links' onClick={closeMobileMenu}>
                                        Profiles
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-links' onClick={closeMobileMenu}>
                                        About
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <button class="ui primary basic button">Log In</button>
                                </li>
                                <li className='nav-item'>
                                    <button class="ui secondary basic button">Secondary</button>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
