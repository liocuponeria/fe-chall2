import renderer, { act } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import IndexPage, { getStaticProps } from 'pages/index'
import { theme } from 'assets/theme'

import { mockProducts } from '../mock/products'

jest.mock('next/dist/client/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      category: undefined,
    },
  })),
}))

jest.mock('hooks/filter', () => ({
  useFilter: jest.fn().mockImplementation(() => ({
    filter: 'empty',
    setFilter: jest.fn(),
  })),
}))

jest.mock('service/api', () => ({
  api: {
    get: jest.fn().mockImplementation(() => ({
      data: mockProducts,
    })),
  },
}))

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <IndexPage products={mockProducts} />
      </ThemeProvider>
    )

    expect(tree.toJSON()).toMatchSnapshot()

    act(() => {
      tree.root.findByProps({ 'data-test-id': 'selectBoxContainer' }).props.onClick()
      tree.root.findByProps({ 'data-test-id': 'selectBoxOption0' }).props.onClick()
    })
  })

  it('getStaticProps', async () => {
    expect(await getStaticProps({})).toEqual({ props: { products: mockProducts } })
  })
})
