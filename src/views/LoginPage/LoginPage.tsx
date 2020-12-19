import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {

    return (
        <section className="section">
            <main className="container">
                <div className="columns is-multiline is-centered contain">
                    <div className="column left">
                    <h1 className="title is-1 u-margin-bottom">Mesh</h1>
                    <h2 className="subtitle colored is-4 primary-color">Take your conversation beyond email with Mesh</h2>
                    <p>Mesh’s email and calendar tools help you communicate,
                        stay on top of what matters, and get things done.</p>
                    </div>
                    <div className="column right">
                        <h1 className="title is-4">Login</h1>
                        <p className="description">Welcome back!</p>
                        <form>
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
                        </form> 
                    </div>
                </div>
            </main>
        </section>
    )
}

export default LoginPage;
