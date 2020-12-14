import React from 'react';
import Link from 'next/link';
import Globalstyle from '../styles/global';
import { Main, Container, Title, Button, Product } from '../styles/detalhes';

interface Props {
  details: ProductDetails;
}

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function ProductDetail(props: Props) {
  const { details } = props;

  return (
    <>
      <Globalstyle />
      <Container>
        <Main>
          <Product>
            <img src={details?.image} alt="Produto" width="500" height="310" />
          </Product>
          <div>
            <Title>
              <div>
                <h3>{details?.title}</h3>
                <div>
                  <span>
                    R$
                    {details?.price}
                  </span>
                </div>
              </div>
              <p>{details?.description}</p>
              <div>
                <Button>
                  <Link href="/">
                    <span>comprar</span>
                  </Link>
                </Button>
              </div>
            </Title>
          </div>
        </Main>
      </Container>
    </>
  );
}

export default ProductDetail;
