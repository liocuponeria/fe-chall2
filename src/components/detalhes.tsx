import React from 'react';
import Link from 'next/link';
import Globalstyle from '../styles/global';
import { Main, Container, Title, Button, Product } from '../styles/detalhes';



function ProductDetail() {
  
  return (
    <>
      <Globalstyle />
      <Container>
        <Main>
          <Product>
            <img src="images/tenis.jpg" alt="Produto" width="500" height="310" />
          </Product>
          <div>
            <Title>
              <div>
                <h3>Boné Bordado Harry Potter</h3>
                <div>
                  <span>
                    R$ 39,90
                    
                  </span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec rutrum, sem ut facilisis ullamcorper, felis mauris volutpat velit, 
                  vitae facilisis nibh lorem vitae orci. Sed ullamcorper mi ut ex gravida tempus. 
                  Nunc vel nisi a sapien tincidunt accumsan. Nulla ut elementum quam. 
                  Phasellus tellus tortor, volutpat et sagittis eget, venenatis at elit.</p>
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
