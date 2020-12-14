import styled from 'styled-components';
import { colors } from '../config/colors';

export const Container = styled.div`
  opacity: 1;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 177px;
  justify-content: center;
  color: ${colors.gray};
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;

  div {
    border-radius: 14px;
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: -40px;
  }
`;

export const Main = styled.div`
  max-width: 1050px;
  display: flex;
  width: 100%;

  @media screen and (max-width: 1023px) {
    width: 95%;
    display: block;
    justify-content: center;
  }
`;

export const Product = styled.div`
  margin: auto;
  
  > img {
    border-radius: 14px;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.div`
  max-width: 497px;
  font-size: 22px;
  display: block;
  margin-left: 20px;

  @media screen and (max-width: 1023px) {
    margin: 24px auto;
  }

  h3 {
    font-size: 22px;
    ${colors.gray};
    margin-bottom: 10px;

    @media screen and (max-width: 1023px) {
      margin-bottom: 0px;
    }
  }

  span {
    font-size: 30px;
    color: #4caf50;

    @media screen and (max-width: 1023px) {
      margin: auto;
    }
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    color: #000000b3;
    font-weight: normal;

    @media screen and (max-width: 1023px) {
      margin-top: 9px;
    }
  }
`;

export const Button = styled.div`
  width: 302px;
  height: 36px;
  margin-top: 47px;
  border: 1px solid transparent;
  display: block;
  background: transparent linear-gradient(90deg, #24c92b 0%, #099f0f 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 18px;
  opacity: 1;

  @media screen and (max-width: 1023px) {
    margin: 30px auto;
  }

  span {
    display: flex;
    color: #fff;
    font-size: 16px;
    letter-spacing: 0.64px;
    margin-top: 8px;
    justify-content: center;
    opacity: 1;
    font-family: 'Roboto';
  }
`;
