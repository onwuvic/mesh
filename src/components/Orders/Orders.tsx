import React from 'react';

const Orders = () => {

    return (
        <div>
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
    )
}

export default Orders;
