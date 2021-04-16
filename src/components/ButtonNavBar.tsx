import styled from 'styled-components'
import Link from 'next/link'

interface IProps {
  icon?: string
  link?: string
  isSelected?: boolean
  label: string
}

const ButtonNavBar: React.FC<IProps> = ({ icon, label, isSelected = false, link }) => {
  return (
    <Link href={link ? `/category/${link}` : '/'}>
      <ButtonNavBarContainer isSelected={isSelected}>
        {icon ? <i className={icon} /> : null}
        <span>{label}</span>
      </ButtonNavBarContainer>
    </Link>
  )
}

export default ButtonNavBar

interface IStyledProps {
  isSelected?: boolean
}

const ButtonNavBarContainer = styled.div<IStyledProps>`
  cursor: pointer;
  justify-content: center;
  align-items: center;

  i {
    font-size: 26px;
    color: ${({ isSelected, theme: { colors } }) =>
      isSelected ? colors.navbar.selected : colors.primary};
  }

  span {
    font-family: Roboto;
    font-size: 16px;
    color: ${({ isSelected, theme: { colors } }) =>
      isSelected ? colors.navbar.selected : colors.primary};
    margin-left: 6px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 12px;
    }
  }
`
