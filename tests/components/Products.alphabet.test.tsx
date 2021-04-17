import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import ProductsComponent from 'components/Products'
import { theme } from 'assets/theme'

import { mockProducts } from '../mock/products'

jest.mock('hooks/filter', () => ({
  useFilter: jest.fn().mockImplementation(() => ({
    filter: 'alphabet',
  })),
}))

describe('Products component alphabet', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ProductsComponent products={mockProducts} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
