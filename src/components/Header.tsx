import styled from 'styled-components'
import NavBarDesktop from './NavBar'

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src="/imgs/logo.svg" alt="Cuponeria Logo" />
        </div>
      </HeaderContainer>
      <NavBarDesktop />
    </>
  )
}

export default Header

const HeaderContainer = styled.div(
  ({ theme: { colors } }) => `
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin: 0 auto 0;
  overflow: hidden;
  background: transparent linear-gradient(95deg, ${colors.header.left} 0%, ${colors.header.right} 100%) 0% 0% no-repeat padding-box;

  > div {
    padding: 36px 0 36px 132px;

    @media (max-width: 767px) {
      padding: 15px;
    }

    > img {
      height: 38px;
      width: 220px;

      @media (max-width: 767px) {
        height: 25px;
        width: 150px;
      }
    }
  }
`
)
