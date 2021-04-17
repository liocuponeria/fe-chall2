import styled from 'styled-components'
import ButtonNavBar from './ButtonNavBar'
import { useRouter } from 'next/dist/client/router'
import { navBarButtons } from 'utils/navbar'

const NavBar: React.FC = () => {
  const router = useRouter()
  const category = router?.query?.category

  return (
    <NavBarContainer>
      <div>
        {navBarButtons.map((item) => (
          <ButtonNavBar isSelected={item.link === category} key={item.label} {...item} />
        ))}
      </div>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  box-shadow: 0px 3px 6px ${({ theme: { colors } }) => colors.navbar.shadow};
  height: 60px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 132px 0 132px;
    transition: 2s;
    @media (max-width: 1279px) {
      margin: 0 30px 0 30px;
    }
  }

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0px;
    box-shadow: ${({ theme: { colors } }) => `0px -3px 6px ${colors.navbar.shadow}`};
  }
`
