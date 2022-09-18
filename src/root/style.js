import styled from "styled-components";
import Img from "../assets/images/header.png";

const Container = styled.div`
  /* width: 1920px; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 791px;
  background: url(${Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { Container, Header };
