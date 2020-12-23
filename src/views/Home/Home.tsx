import React from 'react';
import Footer from '../../components/Footer/Footer';
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
        
            <Footer />
        </div>
    )
}

export default Home;
