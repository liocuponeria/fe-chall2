import { getServerSideProps } from 'pages/product/[id]'

jest.mock('utils/navbar', () => ({
  navBarButtons: {
    find: jest.fn().mockImplementation(() => ({
      id: '1',
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
    const context = { params: { id: '1' } }
    expect(await getServerSideProps(context)).toEqual({ props: {} })
  })
})
