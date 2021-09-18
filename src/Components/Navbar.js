import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const history = useHistory();
    const handleRoute = () => {
        history.push("/");
    }
    return (
        <>
            <nav className="navbar">
                <div>
                    <div className="navbar-container">
                        <Link to='/' className='navbar-logo' onClick={handleRoute}>
                            DEVATHON
                        </Link>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link className='nav-links' onClick>
                                    Profiles
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-links' onClick>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <button class="ui primary basic button">Log In</button>
                            </li>
                            <li className='nav-item'>
                                <button class="ui secondary basic button">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
