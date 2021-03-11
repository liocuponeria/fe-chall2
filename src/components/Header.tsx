import React from 'react';
import GlobalStyle from '../styles/global';
import { Container, Main, Logo } from '../styles/index';
import Nav from './Nav';

function Header() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <Logo>
            <img src="/logo.svg" alt="logo" width="200" height="200" />
          </Logo>
        </Main>
      </Container>
    </>
  );
}

export default Header;