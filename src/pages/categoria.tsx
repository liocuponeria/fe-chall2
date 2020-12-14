import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Category from '../components/category';
import GlobalStyle from '../styles/global';
import { ContainerTitle, Main } from '../styles/index';

export default function PageCategory() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Roupas</span>
        </Main>
      </ContainerTitle>
      <Category />
      <Footer />
    </>
  );
}
