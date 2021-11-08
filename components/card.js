/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const CardWrapper = styled.a`
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

const ImageContainer = styled.div`
        align-items: center;
`;
const ProductName = styled.p`
        text-align: center;
        flex: 1 1 auto
`;
const ProductPrice = styled.h2`
        text-align: center;
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



export default function Card(props) {    
    return (
        <Link href={{
            pathname: '/produto/[id]',
            query: { id: props.id},
        }}>  
            <CardWrapper>
                <ImageContainer>
                    <Image
                        src={props.image}
                        width={100} 
                        height={100}
                        alt="product image"
                    />
                </ImageContainer>   
                <ProductName>{props.title} </ProductName> 
                <ProductPrice>R$ {props.price}</ProductPrice>
                <Button>
                    <ButtonText>ver produto</ButtonText>
                </Button>         
            </CardWrapper>
        </Link>
    )
}
