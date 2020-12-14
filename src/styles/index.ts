import styled from 'styled-components';
import { colors } from '../config/colors';

export const Container = styled.div`
  opacity: 1;
  z-index: 1;
  width: 100%;
  height: 109px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent
    linear-gradient(
      95deg,
      var(--unnamed-color-ff0000) 0%,
      var(--unnamed-color-f91e96) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(95deg, #ff0000 0%, #f91e96 100%) 0% 0%
    no-repeat padding-box;

  @media screen and (max-width: 768px) {
    height: 55px;
  }
`;

export const Main = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const Logo = styled.div`
  z-index: 2;
  @media screen and (max-width: 960px) {
    margin-left: 15px;
    width: 40%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  opacity: 1;
  background: ${colors.white};
  box-shadow: 0px 3px 6px #00000029;

  @media screen and (min-width: 724px) and (max-width: 900px) {
    width: 100%;
    margin: auto;
  }
`;

export const ContentIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    display: flex;
    width: 95%;
    margin: auto;
    justify-content: space-between;
  }

  @media screen and (min-width: 660px) and (max-width: 1024px) {
    display: flex;
    width: 95%;
    margin: auto;
    justify-content: space-between;
  }

  div {
    display: block;
    text-align: center;
    align-items: center;
  }

  span {
    font-size: 16px;
    text-decoration: none;
    margin-left: 6px;
    font-family: 'Roboto';
    font-weight: bold;
    color: ${colors.gray};

    &:hover {
      color: red;
    }

    @media screen and (max-width: 660px) {
      display: block;
      margin: auto;
      font-size: 12px;
      font-weight: normal;
      color: #7f7f7f;
    }
  }
`;

export const ContainerTitle = styled.div`
  opacity: 1;
  width: 100%;
  font-size: 24px;
  text-align: left;
  font-weight: bold;
  margin-top: 31px;
  letter-spacing: 0.96px;
  color: #000000b3;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 18px;
  }

  span {
    @media screen and (max-width: 768px) {
      font-size: 18px;
      justify-content: center;
      margin: auto;
      display: flex;
    }
  }
`;
