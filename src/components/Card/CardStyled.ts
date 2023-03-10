import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  padding: 24px;
  color: white;
  background-color: #15263F;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;

`;
export const ImageOne = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color: #00FFF8;
  position: relative;
  :hover {
    opacity: 0.5;
 }
`;
export const H3 = styled.h3`
  margin-top: 24px;
  color: white;
  :hover{
    color: #00FFF8;
  }
`;
export const P = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #8bacd9;
  margin-top: 24px;
`;
export const Second = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;
export const Eth = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #00fff8;
  text-align: left;
`;
export const Day = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #8bacd9;
`;
export const HR = styled.hr`
  margin-top: 24px;
  background: #2e405a;
`;
export const ImageTwo = styled.img`
  width: 33px;
  height: 33px;
  border: 1px solid #FFFFFF;
`;
export const CardInfo = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;
export const Creation = styled.span`
  color: #8bacd9;
  font-size: 16px;
  line-height: 20px;
  padding-left: 16px;
`;
export const NameSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  
  line-height: 20px;
  color: #ffffff;
  padding-left: 5px;
  :hover{
    color: #00fff8;
  }
`;
export const View = styled.svg`
  position: absolute;
  mix-blend-mode: normal;
  margin-left: 150px;
  margin-top: 150px;
  transform: translate(-50%,-50%);
`