import { withRouter } from 'next/router'
import Card from '../../components/card'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
`;
const CategoryCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;


function Category({ products, category }) {
    return (
        <div>
            <Greeting>{category}</Greeting>
            <CategoryCardsContainer>
                {products.map((product) => (
                    <Card key={product.id} {...product}/> 
                ))}
            </CategoryCardsContainer>
        </div>
    )
  }

  export async function getServerSideProps(router) {
    // Fetch data from external API
    if (router.query.category === "men's clothing") {
        const res_men = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        const products_men = await res_men.json()
        const res_women = await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        const products_women = await res_women.json()
        const products = products_men.concat(products_women)
        const category = "Roupas"
        return { props: { products, category } }
} else {
    const res = await fetch(`https://fakestoreapi.com/products/category/${router.query.category}`)
    const products = await res.json()
    if(router.query.category === "jewelery") {
        const category = "Acessórios"
        return { props: { products, category } }
    } else if (router.query.category === "electronics") {
        const category = "Eletronicos"
        return { props: { products, category } }
    }
    
}
    // Pass data to the page via props
  }
  
  export default withRouter(Category)