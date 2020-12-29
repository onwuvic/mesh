import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import Firebase from '../../helpers/Firebase';
import './LoginPage.scss';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    let history = useHistory();
    let location = useLocation();
    let { from }: any = location.state || { from: { pathname: "/" } };

    async function login() {
        try {
            await Firebase.logIn(email, password);
            history.replace(from);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section className="section">
            <main className="container">
                <div className="columns is-multiline is-centered contain">
                    <LandingPage />

                    <div className="column right">
                        <h1 className="title is-4">Login</h1>
                        <p className="description">Welcome back!</p>
                        <form noValidate autoComplete="off" onSubmit={(e) => {
                            e.preventDefault();
                            login();
                        }}>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input is-medium" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email" 
                                        autoComplete="off" 
                                        autoFocus 
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)}/>
                                    <p className="help is-danger">Error message</p>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input is-medium" 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password" 
                                        autoComplete="off" 
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)}/>
                                    <p className="help is-danger">Error Message</p>
                                </div>
                            </div>
                            <button type="submit" className="button is-block is-primary is-fullwidth is-medium">Login</button>
                            <br />
                            <small className="has-text-centered">
                                <em>
                                    Don't have an account <Link to={"/signup"} className="primary-color">Sign Up</Link>
                                </em>
                            </small>
                        </form> 
                    </div>
                </div>
            </main>
        </section>
    )
}

export default LoginPage;
