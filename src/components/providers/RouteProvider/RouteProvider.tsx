import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../../routes/HomeScreen/HomeScreen';

export enum PageRoutes {
	ROOT = '/',
}

export const RouteProvider = (): JSX.Element | null => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PageRoutes.ROOT} element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	);
};
