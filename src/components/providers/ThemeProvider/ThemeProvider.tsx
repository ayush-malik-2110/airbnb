import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { theme as defaultTheme } from '../../../configs/default/theme';

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
	const [theme, setTheme] = useState(defaultTheme);
	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
