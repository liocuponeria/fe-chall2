import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <i className="icon-facebook" />
        <i className="icon-instagram" />
        <i className="icon-twitter" />
        <i className="icon-youtube" />
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

    i {
      font-size: 39px;
      color: ${({ theme: { colors } }) => colors.background};
    }
  }
`
