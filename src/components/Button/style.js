import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  cursor: pointer;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  margin: 8px;
  border: 2px solid black;

  &:hover{
    background: #111;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &:hover {
        background: #e4105d;
        box-shadow: 0px 0px 40px 15px hsla(338, 87%, 48%, 0.6);
        transition: all 0.3s ease 0s;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -8px;
        left: -8px;
        width: calc(100% + 15px);
        height: calc(100% + 15px);
        border-radius: 22px;
      }
    `}
`;
