
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 120px auto 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  margin:  0 auto;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Span = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`;

export const TitleCreate = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;
export const SubtitleCreate = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
 
`;

export const TextHighLight = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding:  0 10px;
  margin-bottom: 35px;
  line-height: 25px;

  color: #e5e044;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const VoltarLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #e23dd9;

  text-transform: uppercase;
  
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;
