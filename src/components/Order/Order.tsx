import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Firebase from '../../helpers/Firebase';
import Spinner from '../Spinner/Spinner';

const Order = () => {
    const initialState: Record<string, any> = {};
    const [order, setOrder] = useState(initialState);
    const [error, setError] = useState('');
    const [notFound, setNotFound] = useState('');
    const [loading, setLoading] = useState(false);
    let { id }: any = useParams();

    async function getOrder(id: number | string ) {
        try {
            setLoading(true);
            const order = await Firebase.getOrderById(id);
            setLoading(false);
            if (order) {
                setOrder(order);
            } else {
                setNotFound('No such order!');
            }
        } catch (error) {
            setLoading(false);
            setError('Sorry, something went wrong on our end. Try again later');
        }
    }

    function renderContent() {
        if (Object.keys(order).length) {
            return (
                <div>
                    <span className="is-size-5">
                        Order
                    </span>

                    <div className="u-margin-top">
                        <div className="columns">
                            <div className="column is-four-fifths">
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="text"
                                            name="title"
                                            defaultValue={order.title} />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Booking Date</label>
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="date"
                                            defaultValue={`${ moment.utc(order.bookingDate).format('YYYY-MM-DD')}`} />
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
                                            <input 
                                                className="input" 
                                                type="text"
                                                defaultValue={order.customer.name} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                defaultValue={order.customer.email} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Phone</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="tel" 
                                                defaultValue={order.customer.phone} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Street</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        defaultValue={order.address.street} />
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">City</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                defaultValue={order.address.city} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Country</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                defaultValue={order.address.country} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Postal Code</label>
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                defaultValue={order.address.zip} />
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </fieldset>  
                    </div>
                </div>
            )
        } 

        if (notFound) {
            return (
                <article className="message is-warning">
                    <div className="message-body">
                    { notFound }
                    </div>
                </article>
            )
        }

        return (
            <article className="message is-danger">
                <div className="message-body">
                    { error }
                </div>
            </article>
        );
    }

    useEffect(() => {
        getOrder(id);
    }, [id]);

    return (
        <div>
            {
                loading ? (<Spinner />) : (renderContent()) 
            }
        </div>
    )
}

export default Order;
