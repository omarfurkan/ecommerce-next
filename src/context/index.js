import React, { createContext } from 'react';

export const GlobalContext = createContext(null)

export default BlobalState = ({ children }) => {
    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    );
};

