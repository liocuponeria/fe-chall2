import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import CategoryPage from 'pages/category/[category]'
import { theme } from 'assets/theme'

import { mockProducts } from '../../mock/products'

jest.mock('next/dist/client/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      category: 'electronics',
    },
  })),
}))

describe('Category page', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <CategoryPage products={mockProducts} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
