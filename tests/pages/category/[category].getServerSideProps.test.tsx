import { getServerSideProps } from 'pages/category/[category]'
import { mockProducts } from '../../mock/products'

jest.mock('utils/navbar', () => ({
  navBarButtons: {
    find: jest.fn().mockImplementation(() => ({
      category: 'electronics',
    })),
    map: jest.fn().mockImplementation(() => []),
  },
  getCategory: jest.fn().mockImplementation(() => ({
    category: 'electronics',
  })),
}))

jest.mock('service/api', () => ({
  api: {
    get: jest.fn().mockImplementation(() => ({
      data: mockProducts,
    })),
  },
}))

describe('Category page', () => {
  it('getServerSideProps', async () => {
    const context = { params: { category: 'electronics' } }
    expect(await getServerSideProps(context)).toEqual({ props: { products: mockProducts } })
  })
})
