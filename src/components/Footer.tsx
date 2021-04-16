import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <img src="/imgs/facebook.svg" alt="facebook" />
        <img src="/imgs/instagram.svg" alt="instagram" />
        <img src="/imgs/twitter.svg" alt="twitter" />
        <img src="/imgs/youtube.svg" alt="youtube" />
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    `transparent linear-gradient(180deg, ${theme.colors.footer.left} 0%, ${theme.colors.footer.right} 100%) 0% 0% no-repeat padding-box`};

  > div {
    width: 297px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 42px 0 42px 0;

    @media (max-width: 767px) {
      margin: 42px 0 98px 0;
    }

    img {
      height: 39px;
      width: 39px;
    }
  }
`
