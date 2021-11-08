import styled from 'styled-components'
//components
import Card from '../components/card'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
`;
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    `;

function Home({ products }){
  return (
    <div>
      <Greeting>Sugestões para você</Greeting>
      <CardContainer>
        {products.map((product) => (
              <Card key={product.id} {...product}/> 
        ))}
      </CardContainer>
    </div>
  )
}

export async function getStaticProps() {
  // Calling the API endpoint to get products
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: {
      products
    },
  }
}

export default Home