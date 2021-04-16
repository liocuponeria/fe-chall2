import styled from 'styled-components'
import NavBar from './NavBar'

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src="/imgs/logo.svg" alt="Cuponeria Logo" />
        </div>
      </HeaderContainer>
      <NavBar />
    </>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent
    ${({ theme: { colors } }) =>
      `linear-gradient(95deg, ${colors.header.left} 0%, ${colors.header.right} 100%)`}
    0% 0% no-repeat padding-box;

  > div {
    padding: 36px 0 36px 132px;

    > img {
      height: 38px;
      width: 220px;
    }
  }

  @media (max-width: 767px) {
    > div {
      padding: 15px;
      > img {
        height: 25px;
        width: 150px;
      }
    }
  }
`
