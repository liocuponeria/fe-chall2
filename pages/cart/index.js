/* eslint-disable react/jsx-key */
import CartCard from '../../components/cart/cart-card'
import CartSummaryCard from '../../components/cart/cart-summary'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
`;

const FullCart = styled.div`
    display: grid;
    @media (max-width: 768px) {
        display: block;
      }
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    
`;

const CartSummaryContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 1/2;
    grid-row-gap: 20px;
`;

const CartCardsContainer = styled.div`
    display: grid;
    grid-template-rows: 0.45fr 0.45fr 0.1fr;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-gap: 20px;
    `;


function Cart({ cartProducts }) {
    return (
        <div>
            <Greeting>Meu carrinho</Greeting>
            <FullCart>
                <CartCardsContainer>
                    {cartProducts.map((product) => ( 
                        <CartCard key={product.id} {...product} />
                    ))}
                </CartCardsContainer>
                <CartSummaryContainer>
                    <CartSummaryCard />
                </CartSummaryContainer>
            </FullCart>
        </div>
    )
  }

  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/carts/5`)
    const cartFull = await res.json()
    const cart = cartFull.products
    let cartProducts = []
    for (let i = 0; i < cart.length ; i++) {
        let cartId = cart[i].productId
        let response = await fetch (`https://fakestoreapi.com/products/${cartId}`)
        let item = await response.json()
        item.quantity = cart[i].quantity
        cartProducts.push(item) 
    }
    // Pass data to the page via props
    return { props: { cartProducts } }
  }
  
  export default Cart