import React, { useState } from 'react';
import { AppContext } from './AppContext';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
    const [appData, setAppData] = useState({});
    return (
        <AppContext.Provider
            value={{
                appData,
                setAppData,
            }}>
            {children}
        </AppContext.Provider>
    );
};
