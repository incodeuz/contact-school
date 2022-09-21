import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
import { ReactComponent as exit } from '../../assets/icons/exit.svg';

const Container = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .active {
    color: #ff9d42;
  }

  @media screen and (max-width: 1300px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 1200px) {
    .flex {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(NavLink)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
    color: #ff9d42;
  }
  @media screen and (max-width: 800px) {
    display: none;
    .flex {
      display: none;
    }
  }
`;

const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  margin-left: ${({ marLeft }) => (marLeft ? '20px' : 0)};
  margin-right: ${({ marRight }) => (marRight ? '10px' : 0)};
  :hover {
    cursor: pointer;
    color: ${({ without }) => (without ? 'white' : 'var(--color)')};
  }
  @media screen and (max-width: 800px) {
    display: none;
    .flex {
      display: none;
    }
  }
`;

const Button = styled.button`
  border: 2px solid var(--color);
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: var(--color);
  padding: 11px 16px;
  background: transparent;
  :hover {
    cursor: pointer;
    background: #ff9d42;
    color: white;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Hamburger = styled(Menu)`
  display: none;
  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

export const BoxMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ menu }) => (menu ? '-100%' : '0px')};
  background: #ff9d42;
  padding: 33px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

Flexing.Exit = styled(exit)``;

Flexing.Btn = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 150px;
  height: 44px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ff9d42;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

BoxMobile.Item = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  margin: 25px 0px;
  cursor: pointer;
  display: block;
`;

export const PhoneDiv = styled.div`
  display: flex;
  align-items: center;
`;

PhoneDiv.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

export { Container, Wrapper, Title, Button, Hamburger, Text };
