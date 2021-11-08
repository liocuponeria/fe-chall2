/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
        flex: 0 1 auto;
        flex-direction: column;
        flex-wrap: wrap;
        box-shadow: 1px 1px 5px grey;
        border-radius: 25px; 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;
    `;

const ImageContainer = styled.div`
        align-items: left;
        padding: 10px;
`;
const ProductName = styled.p`
        text-align: left;
        padding: 10px;
        justify-content: center;
        width: 250px;
`;
const QuantityCounter = styled.div`
        width: 75px;
        height: 30px;
        box-shadow: 1px 1px 5px grey;
        text-align: center;
        
`;
const ProductPrice = styled.h2`
        text-align: right;
        padding: 10px;
        justify-content: center;
`;

export default function Cart(props) {    
    return ( 
            <Wrapper>
                <ImageContainer>
                    <Image
                        src={props.image}
                        width={100} 
                        height={100}
                        alt="product image"
                    />
                </ImageContainer>   
                <ProductName>{props.title} </ProductName>
                    <Image
                        src="/images/menos.svg"
                        height={30}
                        width={30}
                        alt="inicio"
                        />
                    <QuantityCounter>
                        <p>{props.quantity}</p>
                    </QuantityCounter>
                    <Image
                        src="/images/mais.svg"
                        height={30}
                        width={30}
                        alt="inicio"
                    />
                <ProductPrice>R$ {props.price}</ProductPrice>
                <Image
                    src="/images/lixeira.svg"
                    height={30}
                    width={30}
                    alt="deletar"
                  />       
            </Wrapper>
    )
}
