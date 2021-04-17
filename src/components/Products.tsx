import styled from 'styled-components'
import Product from './Product'
import { useMemo } from 'react'
import { useFilter } from 'hooks/filter'
import { alphabetValue, lowPriceValue, newerValue } from 'utils/sort'

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
  const { filter } = useFilter()

  const sortedProducts = useMemo(() => {
    if (filter === lowPriceValue) {
      return products.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
    }
    if (filter === alphabetValue) {
      return products.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
    }
    if (filter === newerValue) {
      return products.sort((a, b) => (a.id > b.id ? -1 : a.id < b.id ? 1 : 0))
    }
    return products.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  }, [filter, products])

  return (
    <ProductsContainer>
      {sortedProducts?.map((product, index) => (
        <Product {...product} key={`${index}-${product.id}`} />
      ))}
    </ProductsContainer>
  )
}

export default Products

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  transition: 2s;

  @media (max-width: 1150px) and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`
