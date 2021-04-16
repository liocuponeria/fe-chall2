import renderer from 'react-test-renderer'
import IndexPage from '../../src/pages/index'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<IndexPage products={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
