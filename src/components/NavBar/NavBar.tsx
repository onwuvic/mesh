import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Firebase from '../../helpers/Firebase';

const NavBar = () => {
    const user = useContext(UserContext);
    // const { name } = user
    // console.log(name);
    let history = useHistory();

    function logOut(): void {
        Firebase.logOut();
        history.replace('/login') 
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    Mesh
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <span className="navbar-item">
                        Hi, Victor
                    </span>
                    <div className="navbar-item">
                        <div className="buttons">
                            <span className="button is-light" onClick={() => { logOut()}}>
                                Log Out
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
