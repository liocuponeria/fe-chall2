import styled from 'styled-components'
import Link from 'next/link'
import BuyButton from './Button/BuyButton'

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
        <div className="prodImg" />
        <div className="prodInfoContainer">
          <span className="prodShortLabel">
            {id} -{title.length > 65 ? `${title.substring(0, 65)}...` : title}
          </span>

          <span className="prodPrice">R$ {price.toFixed(2)}</span>

          <BuyButton text="Ver Produto" />
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

  .prodImg {
    border-radius: 14px 14px 0 0;
    height: 203px;
    width: 328px;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .prodInfoContainer {
    border-radius: 0 0 14px 14px;
    border-left: 1px solid ${({ theme: { colors } }) => colors.products.border};
    height: 145px;
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .prodShortLabel {
      font-size: 16px;
      padding-left: 14px;
      padding-right: 14px;
      min-height: 40px;
    }

    .prodPrice {
      font-size: 22px;
      font-weight: 700;
      @media (max-width: 767px) {
        margin-bottom: 18px;
      }
    }
  }
`
