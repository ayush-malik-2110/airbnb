import {
    StyleProvider,
    ThemeProvider,
    AppProvider,
} from './components/providers';
import {Bootstrap} from './modules/bootstrap';

export const App = (): JSX.Element => {
    return (
        <StyleProvider>
            <ThemeProvider>
                <AppProvider>
                    <Bootstrap />
                </AppProvider>
            </ThemeProvider>
        </StyleProvider>
    );
};
