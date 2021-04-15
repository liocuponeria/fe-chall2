import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

interface IProps {
  showHeader?: boolean
  showFooter?: boolean
}

const Background: React.FC<IProps> = ({ showHeader = true, showFooter = true, children }) => {
  return (
    <BackgroundContainer>
      {showHeader ? <Header /> : null}

      <MainContainer>{children}</MainContainer>

      {showFooter ? <Footer /> : null}
    </BackgroundContainer>
  )
}

export default Background

const BackgroundContainer = styled.div`
  display: grid;
  gap: 4px;
  align-items: center;
  justify-items: center;
`

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
`
