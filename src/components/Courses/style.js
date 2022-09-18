import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .ikon {
    margin-top: 40px;
    @media screen and (max-width: 600px) {
      margin-left: 25px;
      margin-top: 25px;
    }
    @media screen and (max-width: 480px) {
      margin-left: 20px;
      margin-top: 20px;
    }
  }
`;
export const Wrap = styled.div`
  text-align: center;
  margin-top: 100px;
  @media screen and (max-width: 600px) {
    margin-top: 80px;
  }
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  font-style: normal;
  color: #ff9d42;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Color = styled.span`
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  font-style: normal;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Flexing = styled.div`
  width: 67%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Btn = styled(Link)`
  border: 2px solid var(--color);
  border-radius: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: var(--color);
  padding: 11px 16px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    background: #ff9d42;
    color: white;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 15px;
    margin-top: 15px;
    box-sizing: border-box;
    width: 150px;
    height: 40px;
    border: 2px solid #ff9d42;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    padding: 0px;
    line-height: 22px;
    font-weight: 400;
    background: transparent;
  }
`;

export const Cardbox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0px auto;
  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 280px;
  background: #ffffff;
  margin: 20px;
  border: 1px solid #eff2f7;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 600px) {
    height: 246px;
    width: 335px;
    margin: 25px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 320px) {
    height: 235px;
    width: 320px;
    margin: 25px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardButton = styled.button`
  width: 53px;
  height: 23px;
  border: none;
  background: #e8f9de;
  border-radius: 53px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #70c63b;
  margin-left: 210px;
  @media screen and (max-width: 600px) {
    margin-left: 170px;
  }
`;

export const CardText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #332233;
  margin-left: 40px;
  margin-top: 25px;
  @media screen and (max-width: 600px) {
    margin-left: 30px;
    margin-top: 20px;
  }
`;
export const CardSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #ff9d42;
`;
export const NamesWrapper = styled.div`
  margin-top: 25px;
`;
export const Names = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8a90a5;
  margin-left: 40px;
  margin-top: 5px;
  @media screen and (max-width: 600px) {
    margin-left: 28px;
  }
`;
export const LastOne = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #ff9d42;
  cursor: pointer;
  margin-left: 302px;
  @media screen and (max-width: 600px) {
    margin-left: 245px;
    box-sizing: border-box;
  }
`;
