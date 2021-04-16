import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      header: {
        left: string
        right: string
      }
      navbar: {
        selected: string
        shadow: string
      }
      products: {
        border: string
        button: {
          left: string
          right: string
          rover: string
        }
      }
      footer: {
        left: string
        right: string
      }
    }
  }
}
