import axios from 'axios'
import { GetServerSideProps } from 'next'
import Background from 'src/components/Background'
import ProductDetails from 'src/components/ProductDetails'

interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const Categories: React.FC<IProduct> = (product) => {
  return (
    <Background>
      <ProductDetails {...product} />
    </Background>
  )
}

export default Categories

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${context.params.id}`)
    console.log(data)
    return {
      props: data,
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}
