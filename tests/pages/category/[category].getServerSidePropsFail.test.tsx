import { getServerSideProps } from 'pages/category/[category]'

jest.mock('utils/navbar', () => ({
  navBarButtons: {
    find: jest.fn().mockImplementation(() => ({
      category: 'electronics',
    })),
  },
  getCategory: jest.fn().mockImplementation(() => ({
    category: 'jewelery',
  })),
}))

jest.mock('service/api', () => ({
  api: {
    get: jest.fn().mockImplementation(Promise.reject),
  },
}))

describe('Category page', () => {
  it('getServerSideProps', async () => {
    const context = { params: { category: 'electronics' } }
    expect(await getServerSideProps(context)).toEqual({ props: { products: [] } })
  })
})
