import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import ProductPage from 'pages/product/[id]'
import { theme } from 'pages/_app'
import { mockProducts } from '../../mock/products'

jest.mock('next/dist/client/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      category: 'electronics',
    },
  })),
}))

describe('Product page', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ProductPage {...mockProducts[0]} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
