import Link from 'next/link'
import styled from 'styled-components'

interface IProps {
  text?: string
  href?: string
}

const BuyButton: React.FC<IProps> = ({ text, href }) =>
  href ? (
    <Link href={href}>
      <BuyButtonContainer>{text}</BuyButtonContainer>
    </Link>
  ) : (
    <BuyButtonContainer>{text}</BuyButtonContainer>
  )

export default BuyButton

const BuyButtonContainer = styled.a`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 302px;
  height: 36px;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(90deg, ${colors.products.button.left} 0%, ${colors.products.button.right} 100%) 0% 0% no-repeat padding-box`};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 18px;

  :hover {
    background: ${({ theme: { colors } }) => colors.products.button.rover};
  }
`
