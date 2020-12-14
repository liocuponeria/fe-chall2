import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlobalStyle from '../styles/global';
import { Container, Content, ContentIcons, Main, Logo } from '../styles/index';

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
      <Content>
        <Main>
          <ContentIcons className="active">
            <div>
              <img src="/inicio.svg" alt="logo" width="18" height="15" />
              <Link href="/">
                <span>inicio</span>
              </Link>
            </div>
            <div>
              <img src="/roupas.svg" alt="logo" width="18" height="15" />
              <Link href="produtos/clothes">
                <span>roupas</span>
              </Link>
            </div>
            <div>
              <img src="/eletronicos.svg" alt="logo" width="18" height="15" />
              <Link href="/produtos/eletronic">
                <span>eletrônicos</span>
              </Link>
            </div>
            <div>
              <img src="/acessorios.svg" alt="logo" width="18" height="15" />
              <Link href="/produtos/jewelery">
                <span>acessórios</span>
              </Link>
            </div>
          </ContentIcons>
        </Main>
      </Content>
    </>
  );
}

export default Header;
