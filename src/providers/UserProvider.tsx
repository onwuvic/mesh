import React, { useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Firebase from '../helpers/Firebase';

const UserProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        Firebase.auth.onAuthStateChanged(async (authUser: any) => {
            const user = await Firebase.getUserDocument(authUser);
            setCurrentUser(user);
        })
    }, []);

    return (
        <UserContext.Provider
            value={currentUser}
        >
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;