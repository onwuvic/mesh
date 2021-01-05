import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Firebase from '../../helpers/Firebase';
import Spinner from '../Spinner/Spinner';

const Order = () => {
    const initialState: Record<string, any> = {};
    const [order, setOrder] = useState(initialState);
    const [title, setTitle] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [error, setError] = useState('');
    const [noDocument, setNoDocument] = useState('');
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    let { id }: any = useParams();

    async function getOrder(id: number | string ) {
        try {
            setLoading(true);
            const order = await Firebase.getOrderById(id);
            setLoading(false);
            if (order) {
                setOrder(order);
                setTitle(order.title);
                setBookingDate(order.bookingDate);
            } else {
                setNoDocument('No such order!');
            }
        } catch (error) {
            setLoading(false);
            setError('Sorry, something went wrong on our end. Try again later');
        }
    }

    async function updateOrder(e: any) {
        e.preventDefault();
        console.log('---->', title, bookingDate);
    }

    function renderContent() {
        if (Object.keys(order).length) {
            return (
                <div>
                    <div className="columns">
                        <div className="column">
                            <span className="is-size-5">
                                Order
                            </span>
                        </div>
                        {
                            !editMode && (
                                <div className="column is-1">
                                    <span className="button is-primary is-small" onClick={() => { setEditMode(true)}}>
                                        Edit
                                    </span>
                                </div>
                            )
                        }   
                    </div>
                

                    <div className="u-margin-top">
                        <form noValidate autoComplete="off" onSubmit={(e) => { updateOrder(e)}}>
                            <fieldset disabled={!editMode}>
                                <div className="columns">
                                    <div className="column is-three-quarters">
                                        <div className="field">
                                            <label className="label">Title</label>
                                            <div className="control">
                                                <input 
                                                    className="input" 
                                                    type="text"
                                                    name="title"
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    onBlur={(e) => setTitle(e.target.value)}
                                                    value={title} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Booking Date</label>
                                            <div className="control">
                                                <input 
                                                    className="input"
                                                    name="bookingDate"
                                                    type="date"
                                                    onChange={(e) => setBookingDate(e.target.value)}
                                                    onBlur={(e) => setBookingDate(e.target.value)}
                                                    value={`${ moment.utc(bookingDate).format('YYYY-MM-DD')}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset disabled className="u-margin-top">
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

                                <div className="columns u-margin-top">
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

                            {
                                editMode && (
                                    <div className="field is-grouped u-margin-top">
                                        <div className="control">
                                            <button type="submit" className="button is-primary">Update</button>
                                        </div>
                                        <div className="control">
                                            <button className="button is-link is-light" onClick={() => { setEditMode(false)}}>Cancel</button>
                                        </div>
                                    </div>
                                )
                            } 
                        </form> 
                    </div>
                </div>
            )
        } 

        if (noDocument) {
            return (
                <article className="message is-warning">
                    <div className="message-body">
                    { noDocument }
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
