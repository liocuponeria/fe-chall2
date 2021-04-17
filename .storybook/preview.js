import { ThemeProvider } from 'styled-components'
import { theme } from '../src/assets/theme'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import React from 'react'
import { colors } from '../src/assets/colors'

const themes = [theme]
addDecorator(withThemesProvider(themes), ThemeProvider)

export const decorators = [
  (Story) => (
    <React.Fragment
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        color: colors.primary,
        fontFamily: 'Roboto',
      }}
    >
      <Story />
    </React.Fragment>
  ),
]

// margin: 0;
// padding: 0;
// box-sizing: border-box;
// -webkit-font-smoothing: antialiased !important;
// color: ${colors.primary};
// font-family: Roboto;
