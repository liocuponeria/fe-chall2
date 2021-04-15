import styled from 'styled-components'
import ButtonNavBar from './ButtonNavBar'
import { useRouter } from 'next/dist/client/router'

const buttons = [
  { label: 'início', icon: 'icon-inicio' },
  { label: 'roupas', link: 'roupas', icon: 'icon-roupas' },
  { label: 'eletrônicos', link: 'eletronicos', icon: 'icon-eletronicos' },
  { label: 'acessórios', link: 'acessorios', icon: 'icon-acessorios' },
]

const NavBar: React.FC = () => {
  const router = useRouter()
  const { category } = router.query
  return (
    <NavBarContainer>
      <div>
        {buttons.map((item) => (
          <ButtonNavBar isSelected={item.link === category} key={item.label} {...item} />
        ))}
      </div>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 60px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 132px 0 132px;
  }

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0px;
    box-shadow: ${({ theme }) => `0px -3px 6px ${theme.colors.navbar.shadow}`};
  }
`
