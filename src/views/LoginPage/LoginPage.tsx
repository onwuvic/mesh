import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import './LoginPage.scss';

const LoginPage = () => {

    return (
        <section className="section">
            <main className="container">
                <div className="columns is-multiline is-centered contain">
                    <LandingPage />

                    <div className="column right">
                        <h1 className="title is-4">Login</h1>
                        <p className="description">Welcome back!</p>
                        <form noValidate autoComplete="false">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="email" placeholder="Email" name="email" />
                                    <p className="help is-danger">Error message</p>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="password" placeholder="Password" name="password" />
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
