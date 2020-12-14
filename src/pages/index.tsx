import React from 'react';
import BoxProduct from '../components/BoxProduct';
import Header from '../components/header';
import Footer from '../components/footer';
import GlobalStyle from '../styles/global';
import { ContainerTitle, Main } from '../styles/index';
import { ContainerProduct } from '../styles/boxProducts';


export default function Homepage () {  
  return (
    <>
      <Header />
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Sugestões para você</span>
        </Main>
      </ContainerTitle>
      <ContainerProduct>
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
      
      </ContainerProduct>
      <Footer />
    </>
  );
}

