import { GetServerSideProps } from 'next'
import Background from 'components/Background'
import Products from 'components/Products'
import SortBy from 'components/SortBy'
import { api } from 'service/api'
import { productsInCategoryEndPoint } from 'service/endpoints'
import { getCategory } from 'utils/navbar'

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

interface IGetServerSideProps {
  params: { category: string }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps: GetServerSideProps | any = async (
  context: IGetServerSideProps
) => {
  const { category } = getCategory(context.params.category)

  try {
    const { data } = await api.get(productsInCategoryEndPoint(category))

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
