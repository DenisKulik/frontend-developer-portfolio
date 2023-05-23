import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global, theme } from './GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>
);
