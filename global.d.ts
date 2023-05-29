declare module '*.png' {
	const value: any;
	export = value;
}

declare module '@pepcus/react-simple-data-grid' {
	const data = <T>data;
	export = data;
	const metaData = {
		headerConfig: [
			{
				label: string,
				key: string,
				emptyCells: string,
				disableFilter: boolean,
			},
		],
	};
	export = metaData;
}
