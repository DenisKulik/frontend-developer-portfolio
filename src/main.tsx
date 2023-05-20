import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global } from './GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Global />
        <App />
    </>
);
