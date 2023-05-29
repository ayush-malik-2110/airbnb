import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AXIOS_METHODS } from '../../vendors/axios';

interface Error {
	response: any;
}

type useAPIProps = {
	response: any;
	error?: Error;
	loading: boolean;
};

export const useAPI = ({
	url,
	method,
	data = null,
	headers = null,
}: AxiosRequestConfig): useAPIProps => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState<Error | undefined>(undefined);
	const [loading, setLoading] = useState(true);

	axios.defaults = {
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json',
		},
	};

	const fetchData = () => {
		axios({
			url: url as string,
			method: method as AXIOS_METHODS,
			headers: headers,
			data: JSON.parse(data),
		})
			.then((res: AxiosResponse) => {
				setResponse(res.data);
			})
			.catch((err: Error) => {
				return setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, [method, url]);
	return { response, error, loading };
};
