/* eslint-disable max-lines */
/* eslint-disable max-lines */
import { DefaultTheme } from 'styled-components';

const colors = {
	black: '#000000',
	white: '#f6f6f6',

};

export enum MaxWidthBreakpoint {
	Mobile = 500,
	Tablet = 768,
}

export enum MinWidthBreakpoint {
	Tablet = 501,
	Desktop = 801,
}

export const theme: DefaultTheme = {
	fontSize: {
		_56: '56px',
		_36: '36px',
		_32: '32px',
		_24: '24px',
		_21: '21px',
		_18: '18px',
		_16: '16px',
		_14: '14px',
		_12: '12px',
		_10: '10px',
		_8: '8px',
	},
	weight: {
		light: 300,
		regular: 400,
		medium: 500,
		semi: 600,
		bold: 700,
	},
	color: {
		body: colors.white,
	},
};
