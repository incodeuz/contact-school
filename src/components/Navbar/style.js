import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

const Container = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 11;
  .abs {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 132px;
    left: 0;
    width: 100%;
    background-color: black;
    padding: 20px;
    height: ${window.innerHeight - 132}px;
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
  .rasm {
    width: 19px;
    height: 19px;
  }
  .active {
    color: #ff9d42;
  }

  @media screen and (max-width: 1300px) {
    padding: 0 30px;
  }
  /* @media screen and (max-width: 1200px) {
    .flex {
      display: none;
    }
  } */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wrapper {
    width: 100%;
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const Title = styled(NavLink)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
  /* @media screen and (max-width: 800px) {
    display: none;
    .flex {
      display: none;
    }
  } */
`;

const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  margin-left: ${({ marLeft }) => (marLeft ? "20px" : 0)};
  margin-right: ${({ marRight }) => (marRight ? "10px" : 0)};
  :hover {
    cursor: pointer;
    color: ${({ without }) => (without ? "white" : "var(--color)")};
  }
  /* @media screen and (max-width: 800px) {
    display: none;
    .flex {
      display: none;
    }
  } */
`;

const Button = styled.button`
  border: 2px solid var(--color);
  border-radius: 12px;
  font-family: "Inter";
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
  /* @media screen and (max-width: 1200px) {
    display: none;
  } */
`;

const Hamburger = styled(Menu)`
  display: none;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

export { Container, Wrapper, Title, Button, Hamburger, Text };
