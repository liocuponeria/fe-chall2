import styled from 'styled-components';
import { colors } from '../config/colors';

export const Container = styled.div`
  bottom: 0;
  opacity: 1;
  width: 100%;
  height: 124px;
  display: flex;
  margin-top: 43px;
  align-items: center;
  justify-content: center;
  background: transparent
    linear-gradient(
      180deg,
      var(--unnamed-color-ff0000) 0%,
      var(--unnamed-color-f91e96) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(180deg, #FF0000 0%, #F91E96 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  @media screen and (max-width: 660px) {
    height: 180px;
  }
`;

export const Main = styled.div`
  max-width: 297px;
  display: flex;
  width: 100%;
  align-self: center;
`;

export const ContentIcons = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  align-items: right;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    @media screen and (max-width: 660px) {
      margin-bottom: 43px;
    }
    span {
      font-size: 16px;
      text-decoration: none;
      margin-left: 6px;
      font-family: 'Roboto';
      font-weight: bold;
      color: ${colors.gray};
    }
  }
`;