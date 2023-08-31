import { ThemeProvider } from 'styled-components'

import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Global, theme } from './GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>,
)
