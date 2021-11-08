import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const HeaderWrapper = styled.header`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-row: 1fr;
    }
`;
const HeaderLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    background-color: red;
    padding: 0 8rem;
`;
const HeaderOptions = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 2rem 8rem;
    border-top: 1px solid #eaeaea;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 5px grey;
    @media (max-width: 768px) {
      padding: 0; 
    }
`;
const HeaderItem = styled.span`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0px;
    }
`;
const ItemName = styled.p`
    padding: 0 10px;
    color: #7f7f7f;
    @media (max-width: 768px) {
      font-size: 10px;
    }
`;


export default function Header() {
    return(
        <HeaderWrapper>
            <HeaderLogo>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logo.svg"
                    height={200}
                    width={250}
                    alt="logo"
                  />
                </a>
              </Link>
            </HeaderLogo>
            <HeaderOptions>
              <Link href="/">
                <a>
                  <HeaderItem>
                    <Image
                      priority
                      src="/images/inicio.svg"
                      height={30}
                      width={30}
                      alt="inicio"
                    />
                    <ItemName>início</ItemName>
                  </HeaderItem>
                </a>
              </Link>
              <Link href="/categoria/men's%20clothing">
                <a>
                  <HeaderItem>
                    <Image
                      priority
                      src="/images/roupas.svg"
                      height={30}
                      width={30}
                      alt="roupas"
                    />
                    <ItemName>roupas</ItemName>
                  </HeaderItem>
                </a>
              </Link>
              <Link href="/categoria/electronics">
                <a>
                  <HeaderItem>
                    <Image
                      priority
                      src="/images/eletronicos.svg"
                      height={30}
                      width={30}
                      alt="eletronicos"
                    />
                    <ItemName>eletronicos</ItemName>
                  </HeaderItem>
                </a>
              </Link>
              <Link href="/categoria/jewelery">
                <a>
                  <HeaderItem>
                    <Image
                      priority
                      src="/images/acessorios.svg"
                      height={30}
                      width={30}
                      alt="acessorios"
                    />
                    <ItemName>acessórios</ItemName>
                  </HeaderItem>
                </a>
              </Link>
              <Link href="/cart">
                <a>
                  <HeaderItem>
                    <Image
                      priority
                      src="/images/carrinho-de-compras.svg" 
                      height={30}
                      width={30}
                      alt="carrinho"
                    />
                    <ItemName>carrinho</ItemName>
                  </HeaderItem>
                </a>
              </Link>
            </HeaderOptions>
        </HeaderWrapper>
    )
}