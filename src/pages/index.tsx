import Products from 'src/components/Products'
import SortBy from 'src/components/SortBy'
import Background from '../components/Background'
import { GetStaticProps } from 'next'
import axios from 'axios'

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
    const { data } = await axios.get('https://fakestoreapi.com/products')
    console.log(data)
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
