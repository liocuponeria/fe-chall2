import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      header: {
        left: string
        right: string
      }
      navbar: {
        selected: string
        shadow: string
      }
      footer: {
        left: string
        right: string
      }
    }
  }
}
