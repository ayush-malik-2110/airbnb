import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from '../../../configs/default/theme';

interface StyleProviderProps {
	children: ReactNode;
}

export const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
