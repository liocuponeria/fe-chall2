import styled from 'styled-components'
import Link from 'next/link'

interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const Product: React.FC<IProduct> = ({ id, title, price, image }) => {
  return (
    <Link href={`/product/${id}`}>
      <ProductContainer image={image}>
        <div />
        <div>
          <span>{title.length > 65 ? `${title.substring(0, 65)}...` : title}</span>

          <span>R$ {price.toFixed(2)}</span>

          <a>Ver Produto</a>
        </div>
      </ProductContainer>
    </Link>
  )
}

export default Product

interface IProductStyle {
  image: string
}

const ProductContainer = styled.div<IProductStyle>`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 14px;
  height: 348px;
  width: 328px;
  margin: 0 8px 28px 8px;
  font-size: 30px;
  text-align: center;
  box-shadow: 0px 6px 12px #0000001f;

  div:nth-child(1) {
    border-radius: 14px 14px 0 0;
    height: 203px;
    width: 328px;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  div:nth-child(2) {
    border-radius: 0 0 14px 14px;
    border-left: 1px solid ${({ theme: { colors } }) => colors.products.border};
    height: 145px;
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span:nth-child(1) {
      font-size: 16px;
      padding-left: 14px;
      padding-right: 14px;
      min-height: 40px;
    }

    span:nth-child(2) {
      font-size: 22px;
      font-weight: 700;
    }

    a {
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
    }

    a:hover {
      background: ${({ theme: { colors } }) => colors.products.button.rover};
    }
  }
`
