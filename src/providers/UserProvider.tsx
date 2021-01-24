import React, { useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Firebase from '../config/firebase';

const UserProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        Firebase.auth.onAuthStateChanged(async (authUser: any) => {
            try {
                const token = await authUser.getIdToken();
                localStorage.setItem('token', token);
                const user = await Firebase.getUserDocument(authUser);
                setCurrentUser(user);
            } catch (error) {
                setCurrentUser({});
                localStorage.removeItem('token');
            }
            
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