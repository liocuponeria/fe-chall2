import { GetServerSideProps } from 'next'
import Background from 'components/Background'
import ProductDetails from 'components/ProductDetails'
import { api } from '../../service/api'
import { productByIdEndPoint } from 'service/endpoints'

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
interface IGetServerSideProps {
  params: { id: string }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps: GetServerSideProps | any = async (
  context: IGetServerSideProps
) => {
  try {
    const { data } = await api.get(productByIdEndPoint(context.params.id))

    return {
      props: data,
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}
