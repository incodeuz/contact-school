import styled from 'styled-components';
import { ReactComponent as telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as logs } from '../../assets/icons/logofooter.svg';
import titles from '../../assets/images/Titles.png';

export const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 100px 20px 100px 20px;

  @media (max-width: 750px) {
    padding: 40px;
  }
  @media (max-width: 400px) {
    padding: 20px;
  }
`;
Container.Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1279px) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

Container.Wrapper = styled.div`
  width: 100%;
  max-width: 1644px;
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1279px) {
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex: ${({ center }) => center && '.7'};
  justify-content: ${({ center }) => center && 'center'};
  gap: 20px;
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    color: #000000;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    color: #000000;
  }
  h4 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1366px) {
    h1 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1279px) {
    width: ${({ link }) => link && '100%'};
    padding: ${({ link }) => link && '0'};
    margin-top: ${({ link }) => !link && '50px'};
    h1 {
      font-size: 25px;
      line-height: 40px;
      margin-top: 20px;
    }
    p {
      font-size: 22px;
      line-height: 21px;
    }
    h4 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 960px) {
    justify-content: ${({ link }) => link && 'space-between'};
    h4 {
      font-size: 24px;
    }
  }
  @media only screen and (max-width: 500px) {
    h4 {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 400px) {
    gap: 10px;
  }
`;

Card.Title = styled.div`
  display: ${({ a }) => (a ? 'block' : 'none')};
  @media only screen and (max-width: 768px) {
    display: ${({ a }) => (!a ? 'block' : 'none')};
  }
  @media only screen and (max-width: 1460px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 22px;
    }
  }
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ff9d42;
  border-radius: 50%;
  @media only screen and (max-width: 1279px) {
    min-width: 40px;
    min-height: 50px;
  }
  @media only screen and (max-width: 768px) {
    min-width: 35px;
    min-height: 35px;
    max-width: 40px;
    max-height: 40px;
  }
  @media only screen and (max-width: 400px) {
    max-width: 38px;
    max-height: 38px;
  }
`;

Logo.Telegram = styled(telegram)`
  path {
    fill: #ff9d42;
  }
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
  @media only screen and (max-width: 400px) {
    width: 16px;
  }
`;
Logo.Youtube = styled(youtube)`
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
  @media only screen and (max-width: 400px) {
    width: 16px;
  }
`;

Logo.Instagram = styled(instagram)`
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
  @media only screen and (max-width: 400px) {
    width: 16px;
  }
`;
Container.Log = styled(logs)`
  @media only screen and (max-width: 1279px) {
    width: 400px;
  }
  @media only screen and (max-width: 1279px) {
    display: none;
  }
`;
Container.LogMobile = styled.div`
  width: 100%;
  height: 55px;
  background: url(${titles});
  background-repeat: no-repeat;
  background-size: contain;
  display: none;
  @media only screen and (max-width: 1279px) {
    display: flex;
  }
  @media only screen and (max-width: 400px) {
    height: 35px;
  }
`;
