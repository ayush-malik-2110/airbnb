import React from 'react';
import defaultAppData from '../../../configs/default/app.json';

export type AppData = { [key: string]: any };

type AppContextProps = {
    appData: AppData;
    setAppData: React.Dispatch<React.SetStateAction<AppData>>;
};

const DefaultAppContext: AppContextProps = {
    appData: defaultAppData,
    setAppData: () => undefined,
};

export const AppContext = React.createContext(DefaultAppContext);
