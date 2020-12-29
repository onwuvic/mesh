import { createContext } from 'react';

type User = {
    email?: string;
    name?: string;
    phone?: string | number;
    uid?: string;
}

const user: User = {};

export const UserContext = createContext(user);
