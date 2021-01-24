import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Firebase from '../../config/firebase';
import { formatOrderData } from '../../helpers/utilities';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';

const Orders = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    useEffect(() => {
        setLoading(true);
        Firebase.firestore.collection("/orders")
            .onSnapshot((snapshot: any) => {
                const listItems = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                const formatOrder = formatOrderData(listItems);
                setOrders(formatOrder);
                setLoading(false);
            });
    }, []);

    const data = useMemo(
        () => orders,
        [orders]
    )

    const columns = useMemo(
        () => [
          {
            Header: 'Title',
            accessor: 'title', // accessor is the "key" in the data
          },
          {
            Header: 'Booking Date',
            accessor: 'bookingDate',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
          {
            Header: 'Customer',
            accessor: 'customer',
          },
        ],
        []
    )

    const toOrderPage = (id: any) => {
        history.replace(`/orders/${id}`);
    }

    function renderOrders() {
        if (orders.length === 0 ) {
            return (<h1>No Orders Found</h1>);
        }

        return (
            <Table columns={columns} data={data} linkToPage={toOrderPage} />
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
