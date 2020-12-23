import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Home.scss';

const Home = () => {

    return (
        <div className="main">
            <NavBar />

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <span className="is-size-5">
                                Ordered Lists
                            </span>

                            <table className="table is-fullwidth is-hoverable is-striped u-margin-top">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Booking Date</th>
                                        <th>Address</th>
                                        <th>Customer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Test Order 1</td>
                                        <td>22.06.2019</td>
                                        <td>Wriezener Str. 12</td>
                                        <td>Emad Alam</td>
                                    </tr>
                                    <tr>
                                        <td>Test Order 1</td>
                                        <td>22.06.2019</td>
                                        <td>Wriezener Str. 12</td>
                                        <td>Emad Alam</td>
                                    </tr>
                                    <tr>
                                        <td>Test Order 1</td>
                                        <td>22.06.2019</td>
                                        <td>Wriezener Str. 12</td>
                                        <td>Emad Alam</td>
                                    </tr>
                                    <tr>
                                        <td>Test Order 1</td>
                                        <td>22.06.2019</td>
                                        <td>Wriezener Str. 12</td>
                                        <td>Emad Alam</td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Home;
