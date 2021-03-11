import { ContentIcons, Main, Content } from '../styles/index';
import Link from 'next/link';

function Nav() {
    return (
      <>
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
              <Link href="produtos/electronics">
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

export default Nav;