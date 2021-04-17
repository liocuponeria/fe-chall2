import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import ButtonNavBarComponent from 'components/ButtonNavBar'
import { theme } from 'pages/_app'

describe('ButtonNavBar component', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ButtonNavBarComponent label="label" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
