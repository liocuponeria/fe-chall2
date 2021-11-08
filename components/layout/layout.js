import styled from 'styled-components'
import Header from '../layout/header'
import Footer from '../layout/footer'

const LayoutContainer = styled.div`
    display: grid;
    grid-template-columns: 0.15fr 0.70fr 0.15fr;
    grid-template-rows: 0.25fr 0.5fr 0.25fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
`;

const Main = styled.main`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;

export default function Layout({ children }) {
    return (
      <LayoutContainer>
        <Header />   
        <Main>{children}</Main>
        <Footer />
      </LayoutContainer>
    )
  }