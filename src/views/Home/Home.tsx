import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Order from '../Order/Order';
import Orders from '../Orders/Orders';
import './Home.scss';


const Home = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <NavBar />
            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <Switch>
                                <Route exact path={path}>
                                    <Orders />
                                </Route>
                                <Route path={`${path}/:id`}>
                                    <Order />
                                </Route>
                            </Switch>
                        </div>
                    </div>     
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
