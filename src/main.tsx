import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Global />
        <App />
    </>
);
