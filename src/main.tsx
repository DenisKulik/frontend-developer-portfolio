import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'

import { App } from 'app'
import { Global, theme } from 'styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
)
