import React from 'react';

const Order = () => {

    return (
        <div className="main">
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
                                <a className="button is-light">
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <span className="is-size-5">
                                Ordered Lists
                            </span>

                            <div className="u-margin-top">
                                <div className="columns">
                                    <div className="column is-four-fifths">
                                        <div className="field">
                                            <label className="label">Title</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Text input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Booking Date</label>
                                            <div className="control">
                                                <input className="input" type="date" placeholder="Text input" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <fieldset disabled>
                                    <div className="columns">
                                        <div className="column is-half">
                                            <div className="field">
                                                <label className="label">Name</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <label className="label">Email</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <label className="label">Phone</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Street</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Text input" />
                                        </div>
                                    </div>

                                    <div className="columns">
                                        <div className="column">
                                            <div className="field">
                                                <label className="label">City</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <label className="label">Country</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <label className="label">Postal Code</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Text input" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </fieldset>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        
            <footer className="footer flex-margin-top-auto">
                <div className="content has-text-centered">
                    <p>
                        Mesh Copyright &copy; 2020. 
                        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Order;
