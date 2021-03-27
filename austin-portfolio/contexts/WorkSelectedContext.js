import React from 'react';
import { works } from '../constants/works';

export const WorkSelectedContext = React.createContext({
    workSelected: works[0],
    setWork: () => {},
});
