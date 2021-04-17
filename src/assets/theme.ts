import { colors } from '../assets/colors'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    color: ${colors.primary};
    font-family: Roboto;
    background-color: ${colors.background};
  }
`

export const theme = {
  colors,
}
