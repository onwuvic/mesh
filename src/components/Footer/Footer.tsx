import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer flex-margin-top-auto">
            <div className="content has-text-centered">
                <p>
                    Mesh Copyright &copy; 2020. 
                    The source code is licensed <Link className="primary-color" to={"http://opensource.org/licenses/mit-license.php"}>MIT</Link>. 
                </p>
            </div>
        </footer>
    )
}

export default Footer;
