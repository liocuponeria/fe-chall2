import styled from 'styled-components'
import BuyButton from './Button/BuyButton'

interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const ProductDetails: React.FC<IProduct> = ({ id, title, price, image, description }) => {
  return (
    <ProductContainer image={image}>
      <div className="prodDetailsImg">
        <img src={image} alt="" />
      </div>
      <div className="prodDetailsInfo">
        <span className="prodDetailsTitle">{title}</span>
        <span className="prodDetailsPrice">R$ {price.toFixed(2)}</span>
        <div>
          <span className="prodDetailsDescription">{description}</span>
        </div>
        <BuyButton text="comprar" href={`/product/${id}`} />
      </div>
    </ProductContainer>
  )
}

export default ProductDetails

interface IProductStyle {
  image: string
}

const ProductContainer = styled.div<IProductStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 132px 188px 132px;
  transition: 2s;
  @media (max-width: 1279px) and (min-height: 768px) {
    margin: 20px 32px 188px 32px;
  }

  @media (max-width: 767px) {
    margin: 0;
    flex-direction: column;
  }

  .prodDetailsImg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    max-width: 500px;
    height: 310px;
    width: 100%;

    img {
      max-width: 500px;
      max-height: 310px;
      width: auto;
      height: auto;
    }
  }

  .prodDetailsInfo {
    margin-left: 20px;
    min-height: 310px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      margin: 0;
    }

    > div {
      padding-top: 20px;
      flex: 1;
    }

    .prodDetailsTitle {
      font-size: 22px;
      font-weight: 700;
      color: ${({ theme: { colors } }) => colors.primary};
    }

    .prodDetailsPrice {
      color: ${({ theme: { colors } }) => colors.products.details.price};
      font-size: 30px;
      font-weight: 700;
    }

    .prodDetailsDescription {
      font-size: 16px;
      font-family: Roboto;
    }
  }
`
