/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'

const CartSummaryWrapper = styled.a`
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        box-shadow: 1px 1px 5px grey;
        border-radius: 25px; 
        display: flex;
        flex-direction: column;
        flex: 0 1 auto;
        padding: 10px;
        align-items: center;
        
    `;

const CartPrice = styled.h2`
        text-align: center;
        color: green;
`;

const Button = styled.div`
    box-shadow: 1px 1px 5px grey;
    border-radius: 25px;
    background-color: green;
    &:hover {
        background-color: #795a8b;
      }
`;
const ButtonText = styled.p`
    color: white;
    text-align: center;
    padding: 0 80px;    
`;



export default function CartSummary() {    
    return (  
            <CartSummaryWrapper> 
                <CartPrice>Total: R$ 20.98</CartPrice>
                <Link href="/login">
                    <Button>
                        <ButtonText>Continuar</ButtonText>
                    </Button>
                </Link>
            </CartSummaryWrapper>
    )
}
