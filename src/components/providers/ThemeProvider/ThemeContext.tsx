import { DefaultTheme } from 'styled-components';
import React from 'react';
import { theme } from '../../../configs/default/theme';

type ThemeContextProps = {
	theme: DefaultTheme;
	setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

const defaultTheme: ThemeContextProps = {
	theme,
	setTheme: () => undefined,
};

export const ThemeContext = React.createContext(defaultTheme);
