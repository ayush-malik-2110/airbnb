import { useAPI } from '../../components/hooks';
import {useContext, useEffect} from 'react';

import { RouteProvider } from '../../components/providers';
import { fetchAppConfig } from './bootstrapApis';
import {AppContext} from "../../components/providers/AppProvider/AppContext";

export const Bootstrap = (): JSX.Element => {
	const { loading, error, response } = useAPI(fetchAppConfig());
	const {setAppData} = useContext(AppContext);

	useEffect(() => {
		if (response) {
			setAppData(response);
		}
	}, [response]);

	if (loading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>Some error occurred while bootstrapping the app.</div>;
	}
	return <RouteProvider />;
};
