import React from 'react';

const Order = () => {

    return (
        <div>
            <span className="is-size-5">
                Ordered Lists one
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
    )
}

export default Order;
