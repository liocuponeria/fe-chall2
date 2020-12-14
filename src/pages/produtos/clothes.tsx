import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import GlobalStyle from '../../styles/global';
import { ContainerTitle, Main } from '../../styles/index';

export default function Clother() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Roupas</span>
        </Main>
      </ContainerTitle>
      <Footer />
    </>
  );
}
