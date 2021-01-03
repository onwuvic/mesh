import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import Firebase from '../../helpers/Firebase';
import validate from '../../helpers/validations/LoginFormValidationRules';
import useForm from '../../hooks/useForm';
import './LoginPage.scss';

const LoginPage = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { values, handleChange, handleSubmit, errors } = useForm({email: '', password: ''}, login, validate);

    let history = useHistory();
    let location = useLocation();
    let { from }: any = location.state || { from: { pathname: "/" } };

    async function login() {
        const { email, password } = values;
        setLoading(true);
        setError(null);
        try {
            await Firebase.logIn(email, password);
            history.replace(from);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    return (
        <section className="section full-height">
            <main className="container">
                <div className="columns is-multiline is-centered contain">
                    <LandingPage />

                    <div className="column right">
                        <h1 className="title is-4">Login</h1>
                        <p className="description">Welcome back!</p>
                        {
                            error && (
                                <article className="message is-danger">
                                    <div className="message-body">
                                        { error }
                                    </div>
                                </article>
                            ) 
                        }
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className={`input is-medium ${errors.email && 'is-danger'}` }
                                        type="email" 
                                        placeholder="Email" 
                                        name="email" 
                                        autoComplete="off" 
                                        autoFocus 
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        value={values.email} 
                                        required />
                                    {
                                        errors.email && (<p className="help is-danger">{ errors.email }</p>)
                                    }
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className={`input is-medium ${errors.password && 'is-danger'}` } 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password" 
                                        autoComplete="off" 
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        value={values.password} 
                                        required />
                                    {
                                        errors.password && (<p className="help is-danger">{ errors.password }</p>)
                                    }
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className={`button is-block is-primary is-fullwidth is-medium ${loading ? 'is-loading' : ''}`}
                                >
                                    Login
                            </button>
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
