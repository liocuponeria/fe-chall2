import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import BackgroundComponent from 'components/Background'
import { theme } from 'pages/_app'

describe('Products component alphabet', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <BackgroundComponent showFooter={false} showHeader={false} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
