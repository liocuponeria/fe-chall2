/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const CardWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex: 0 1 50%;
    border-radius: 25px; 
    margin: 10 px;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const ImageContainer = styled.div`
    align-items: center;
    padding: 10px;
    justify-itens: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    padding: 10px;
`;
const Description = styled.p`
    text-align: justify;
    text-justify: inter-word;
`;
const Button = styled.div`
    box-shadow: 1px 1px 5px grey;
    border-radius: 25px;
    background-color: green;
    text-align: center;
    margin: 100px;
    &:hover {
        background: #795a8b;
      }
`;
const ButtonText = styled.p`
    color: white;
    font-weight: bold;
`;

export default function SingleCard(props) {
    return (
    <CardWrapper>
        <ImageContainer>
            <Image
                src={props.image}
                width={650} 
                height={650}
                alt="product image"
            />
        </ImageContainer>
        <TextContainer>
            <p>{props.title} </p> 
            <h1>R$ {props.price}</h1> 
            <Description>{props.description}</Description>
            <Link href={{
                pathname: '/cart'
            }}>
                <Button>
                    <ButtonText>Adicionar ao carrinho</ButtonText>
                </Button>       
            </Link>
        </TextContainer>
    </CardWrapper>
    )
}
