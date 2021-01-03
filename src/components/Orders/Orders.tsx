import React, { useEffect, useState } from 'react';
import Firebase from '../../helpers/Firebase';
import Spinner from '../Spinner/Spinner';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Firebase.firestore.collection("/orders")
            .onSnapshot((snapshot: any) => {
                const listItems = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setOrders(listItems);
                setLoading(false);
            });
    }, []);

    function renderOrders() {
        if (orders.length === 0 ) {
            return (<h1>No Orders Found</h1>);
        }

        return (
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
                     {
                         orders.map((order: any) => (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>date</td>
                                <td>street </td>
                                <td>name</td>
                            </tr>
                        ))
                     }
                </tbody>
            </table>
        )
    }

    return (
        <div>
            {
                loading ? (<Spinner />) : (
                    <div>
                        <span className="is-size-5">
                            Ordered Lists
                        </span>

                        { renderOrders() }
                    </div>
                )  
            }
        </div>            
    )
}

export default Orders;
