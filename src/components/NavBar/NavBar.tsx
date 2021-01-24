import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Firebase from '../../config/firebase';

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const user = useContext(UserContext);
    
    let history = useHistory();

    const logOut = (): void => {
        Firebase.logOut();
        
        history.replace('/login') 
    }

    const toggleMenu = (): void => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand has-text-weight-bold">
                <Link className="navbar-item primary-color" to={"/"}>
                    Mesh
                </Link>

                <div 
                    role="button" 
                    className={`navbar-burger ${mobileMenu ? 'is-active' : ''}`} 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample" 
                    onClick={toggleMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${mobileMenu ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <span className="navbar-item">
                        Hi, { user.name }
                    </span>
                    <div className="navbar-item">
                        <span className="button is-primary is-small" onClick={() => { logOut()}}>
                            Log Out
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
