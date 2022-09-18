import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const Wrap = styled.div`
  text-align: center;
  margin-top: 100px;
  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 54px;
  text-align: center;
  color: black;
  span {
    color: #ff9d42;
  }
  @media (max-width: 700px) {
    font-weight: 700;
    font-size: 33px;
    line-height: 36px;
  }
`;
export const InputContainer = styled.div`
  width: 600px;
  background-color: wheat;
  margin: auto;
  margin-top: 27px;
  background: #ffffff;
  border: 1px solid #eff2f7;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    padding: 35px 0px;
  }
`;
export const InputTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #323a56;
  margin-top: 54px;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;
export const Input = styled.input`
  width: 500px;
  height: 65px;
  background: #f8fafc;
  border: 2px solid #eff2f7;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 24px;
  margin-top: 30px;
  color: #8894a0;
  @media (max-width: 700px) {
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const Button = styled.button`
  width: 500px;
  height: 65px;
  background: #ff9d42;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  background: #ff9d42;
  border-radius: 6px;
  color: #ffffff;
  margin-top: 50px;
  border: none;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 700px) {
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 40px;
  }
`;

export const SelectHandle = styled.select`
  width: 500px;
  padding: 0px 60px;
  background: #f8fafc;
  border: 2px solid #eff2f7;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 24px;
  margin-top: 30px;
  color: #8894a0;
  @media (max-width: 700px) {
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
