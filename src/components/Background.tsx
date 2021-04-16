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

      {children}

      {showFooter ? <Footer /> : null}
    </BackgroundContainer>
  )
}

export default Background

const BackgroundContainer = styled.div`
  display: grid;
  gap: 4px;
  width: auto;
  max-width: 1280px;
  margin: 0 auto;
`
