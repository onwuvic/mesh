import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import '../LoginPage/LoginPage.scss';

const SignupPage = () => {

    return (
        <section className="section full-height">
            <main className="container">
                <div className="columns is-multiline is-centered contain">
                    <LandingPage />

                    <div className="column right">
                        <h1 className="title is-4">Sign Up</h1>
                        <p className="description">Coming soon! Only pre-defined users can use this app for now</p>
                        <form noValidate autoComplete="false">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="password" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <br />
                            <button className="button is-block is-primary is-fullwidth is-medium" disabled>Submit</button>
                            <br />
                            <small className="has-text-centered">
                                <em>
                                Already have an account <Link to={"/login"} className="primary-color">Login</Link>
                                </em>
                            </small>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default SignupPage;
