import styled from 'styled-components';
import header from '../../assets/images/headers.png';
import { ReactComponent as call } from '../../assets/icons/calls.svg';
import { ReactComponent as massage } from '../../assets/icons/mail.svg';
import { ReactComponent as maps } from '../../assets/icons/maps.svg';
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ff9d42;
  text-align: center;
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #fff;
    margin: 30px 0 27px 0;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    .flex {
      gap: 0;
    }
  }
`;
Container.Flex = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0 150px 0;
  border-radius: 8px;
  @media only screen and (max-width: 1279px) {
    padding: 40px;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 165px;
  display: flex;
  align-items: center;
  padding: 30px;
  margin: 20px 0;
  background: #fff;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 2px;
    margin: 20px 10px;
    height: auto;
  }
`;
Card.Title = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 18px;
  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #323a56;
    margin-bottom: 17px;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 8px;
    color: #bababa;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 21px;
    }
    p {
      font-size: 19px;
      margin-left: 5px;
    }
    margin-left: 10px;
    text-align: start;
  }
`;

export const Icon = styled.div`
  min-width: 90px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eef27f;
  border-radius: 50%;
  @media only screen and (max-width: 768px) {
    min-width: 60px;
    min-height: 60px;
  }
`;
Icon.Call = styled(call)`
  cursor: pointer;
`;
Icon.Massage = styled(massage)`
  cursor: pointer;
`;
Icon.Maps = styled(maps)`
  cursor: pointer;
`;

export const MassageCard = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 50px;
  h2 {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: #323a56;
  }
  button {
    width: 100%;
    height: 65px;
    background: #ff9d42;
    border-radius: 6px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.98);
  }
  @media only screen and (max-width: 1279px) {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 13px 40px 13px;

    button {
      height: 50px;
      font-size: 14px;
      margin-top: 10px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;
MassageCard.Input = styled.input`
  width: 100%;
  height: ${({ xabar }) => (xabar ? '165px' : '65px')};
  resize: ${({ xabar }) => xabar && 'none'};
  box-sizing: border-box;
  background: #f8fafc;
  border: 2px solid #eff2f7;
  border-radius: 6px;
  margin: 15px 0;
  outline: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #111;
  padding: 0 24px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: ${({ xabar }) => (xabar ? '165px' : '65px')};
  resize: ${({ xabar }) => xabar && 'none'};
  box-sizing: border-box;
  background: #f8fafc;
  border: 2px solid #eff2f7;
  border-radius: 6px;
  margin: 15px 0;
  outline: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #111;
  padding: 10px 24px;
`;

export const Content = styled.div`
  width: 680px;
  height: 795px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${header});
  background-size: cover;
  background-position: center;
  h2 {
    font-family: 'Inter';
    z-index: 9999;
    color: #fff;
    font-size: 20px;
    margin-top: 8px;
  }
  @media only screen and (max-width: 1279px) {
    width: 100%;
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
    height: 380px;
    border-radius: 8px;
  }
`;
export const Title = styled.div`
  font-family: 'Inter';
  z-index: 2;
  color: #fff;
  line-height: 0px;
  font-size: 42px;
  border-bottom: 10px;
  position: relative;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 28px;
    border-bottom: 5px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
  @media (max-width: 600px) {
    height: 400px;
  }
`;
