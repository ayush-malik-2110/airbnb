import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AXIOS_METHODS } from '../../vendors/axios';

interface Error {
	response: any;
}

type FetchResponse = {
	response: any;
	error?: Error;
	loading: boolean;
};

type useLazyApiReturnType = [fetchReq: (data: any) => Promise<void>, fetchRes: FetchResponse];

export const useLazyAPI = ({
	url,
	method,
	// data = null,
	headers = null,
}: AxiosRequestConfig): useLazyApiReturnType => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState<Error | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	axios.defaults = {
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json',
		},
	};

	const fetchData = async (data: any) => {
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

	return [fetchData, { response, error, loading }];
};
