import React, { useState } from 'react';
import { StringsContext } from './StringsContext';

type StringsProviderProps = {
	children: React.ReactNode;
};

export const StringsProvider = ({ children }: StringsProviderProps): JSX.Element => {
	const [strings, setStrings] = useState({});
	return (
		<StringsContext.Provider
			value={{
				strings,
				setStrings,
			}}>
			{children}
		</StringsContext.Provider>
	);
};
