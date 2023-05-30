import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-self: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  margin-top: 5px;
`;

export const InputText = styled.input`
  border: 0;
  height: 30px;
  width: 100%;

  background-color: transparent;
  color: #fff;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin: 8px 0;
`;
