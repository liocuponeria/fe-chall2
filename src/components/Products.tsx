import styled from 'styled-components'
import Product from './Product'

interface IProducts {
  products: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <ProductsContainer>
      {products?.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </ProductsContainer>
  )
}

export default Products

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;

  @media (max-width: 1150px) and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`
