import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerProduct = styled.div`
  max-width: 1070px;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 320px) and (max-width: 663px) {
    justify-content: center;
  }

  @media screen and (min-width: 664px) and (max-width: 772px) {
    justify-content: space-around;
  }

  .produto {
    margin-top: 28px;
    border: 1px solid #00000026;
    border-radius: 14px;
    display: block;
    color: red;
    align-items: center;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 12px #0000001f;
    border: 1px solid #00000026;
    opacity: 1;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(2px);
    }
  }

  img {
    display: flex;
    margin: 3px auto;
    width: 328px;
    height: 203px;
    max-width: 90%;

    background: transparent
      url('img/Captura de Tela 2020-12-08 às 15.59.48.png') 0% 0% no-repeat
      padding-box;
    border-radius: 14px 14px 0 0;
  }

  h4 {
    max-width: 300px;
    height: 40px;
    overflow: hidden;
    justify-content: center;
    display: flex;
    margin: 12px auto;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    color: #000000b3;
    opacity: 1;
  }
  p {
    text-align: center;
    margin-top: 5px;
    font-size: 22px;
    color: #000000b3;
    font-family: 'Roboto';
    letter-spacing: 0px;
    opacity: 1;
    font-weight: 700;
  }

  button {
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Roboto';
    width: 302px;
    height: 36px;
    background: transparent linear-gradient(90deg, #24c92b 0%, #099f0f 100%) 0%
      0% no-repeat padding-box;
    border: 0;
    border-radius: 18px;
    opacity: 1;
    display: flex;
    margin: 19px 13px 27px 13px;
    color: #fff;
    border-radius: 180px;
    box-shadow: 0px 3px 6px #00000029;

    &:hover {
      background: ${shade(0.2, '#24c92b')};
    }
  }
`;
