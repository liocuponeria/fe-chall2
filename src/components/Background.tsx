import styled from 'styled-components'

interface IProps {
  showHeader?: boolean
  showFooter?: boolean
}

const Background: React.FC<IProps> = ({ showHeader = true, showFooter = true, children }) => {
  return (
    <BackgroundContainer>
      {showHeader ? null : null}

      <MainContainer>{children}</MainContainer>

      {showFooter ? null : null}
    </BackgroundContainer>
  )
}

export default Background

const BackgroundContainer = styled.div`
  display: flex;
  background-color: red;
  margin: 0;
  padding: 0;
`

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
`
