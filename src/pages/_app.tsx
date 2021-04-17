import type { AppProps } from 'next/app'
import AppProvider from 'src/hooks'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { colors } from '../assets/colors'
import '../assets/fonts/css/fontello.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    color: ${colors.primary}
  }
`

const theme = {
  colors,
}

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
