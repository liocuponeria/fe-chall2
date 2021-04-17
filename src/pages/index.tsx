import Products from 'components/Products'
import SortBy from 'components/SortBy'
import Background from 'components/Background'
import { GetStaticProps } from 'next'
import { api } from 'service/api'
import { productsEndPoint } from 'service/endpoints'

interface IProduct {
  products: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

const Home: React.FC<IProduct> = ({ products }) => {
  return (
    <Background>
      <SortBy />
      <Products products={products} />
    </Background>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get(productsEndPoint)
    return {
      props: {
        products: data,
      },
    }
  } catch (error) {
    return {
      props: {
        products: [],
      },
    }
  }
}
