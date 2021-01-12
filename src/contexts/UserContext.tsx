import { createContext } from 'react';
import { User } from '../models';

const user: User = {};

export const UserContext = createContext(user);
