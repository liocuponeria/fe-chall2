import axios from 'axios'
import { GetServerSideProps } from 'next'
import Background from 'src/components/Background'
import Products from 'src/components/Products'
import SortBy from 'src/components/SortBy'
import { navBarButtons } from '../../utils/navbar'

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

const Categories: React.FC<IProducts> = ({ products }) => {
  return (
    <Background>
      <SortBy />
      <Products products={products} />
    </Background>
  )
}

export default Categories

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = navBarButtons.find(({ link }) => context.params.category === link)

  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
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
