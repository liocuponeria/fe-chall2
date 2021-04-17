import type { AppProps } from 'next/app'
import AppProvider from 'hooks'
import { ThemeProvider } from 'styled-components'
import 'assets/fonts/css/fontello.css'
import { theme } from 'assets/theme'
import { GlobalStyle } from '../assets/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
