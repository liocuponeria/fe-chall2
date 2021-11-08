import { withRouter } from 'next/router'
import SingleCard from '../../components/single-product-card'

function Product({ product }) {
    return (
        <SingleCard {...product}/>
        )
  }

  // This also gets called at build time
  export async function getServerSideProps(router) {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products/${router.query.id}`)
    const product = await res.json()
    // Pass data to the page via props
    return { props: { product } }
  }
  
  export default withRouter(Product)