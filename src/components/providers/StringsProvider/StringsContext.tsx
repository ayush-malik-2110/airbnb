import React from 'react';
import defaultStrings from '../../../configs/default/strings.json';

export type Strings = { [key: string]: string };

export type StringsContextProps = {
	strings: Strings;
	setStrings: React.Dispatch<React.SetStateAction<string>>;
};

const strings: StringsContextProps = {
	strings: defaultStrings,
	setStrings: () => undefined,
};

export const StringsContext = React.createContext(strings);
