import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    text-align: center;
    color: #000000;
    margin-top: 100px;
    @media (max-width: 600px) {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #000000;
    }
  }
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    text-align: center;
    color: #ff9d42;
    @media (max-width: 600px) {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
    }
  }
`;

export const Flexing = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  border-radius: 8px 8px 0px 0px;
  margin: 15px;
  width: 253px;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Title = styled.div`
  height: 65px;
  background: #ffffff;
  border: 1px solid #eff2f7;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.25);
  text-align: center;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #323a56;
  margin-top: 10px;
`;
export const Name1 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #8a90a5;
  margin-top: 5px;
`;
