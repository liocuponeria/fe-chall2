import { getStaticProps } from 'pages/index'

jest.mock('service/api', () => ({
  api: {
    get: jest.fn(),
  },
}))

describe('Index page', () => {
  it('getStaticProps Fail', async () => {
    expect(await getStaticProps({})).toEqual({ props: { products: [] } })
  })
})
