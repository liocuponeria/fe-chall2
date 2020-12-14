import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import GlobalStyle from '../../styles/global';
import { ContainerTitle, Main } from '../../styles/index';

export default function Eletronic() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Eletrônicos</span>
        </Main>
      </ContainerTitle>
      <Footer />
    </>
  );
}
