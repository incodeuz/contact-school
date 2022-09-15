import styled from "styled-components";
import Img from "../../assets/images/card.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 44px 0;
  width: 100%;
  background: #ff9d42;
  width: 100%;
  height: 860px;
  .swiper-button-next::after {
    content: ">";
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 4px;
    background-color: black;
    position: absolute;
    color: white;
    font-size: 30px;
    right: 0;
    top: 0;
  }
  .mySwiper {
    width: 1300px;
    padding: 60px 0;
    position: relative;
  }
  .swiper-button-prev::after {
    content: "<";
    font-size: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 4px;
    position: absolute;
    right: 50px;
    top: 0;
    color: white;
  }
  .hallo {
    width: 761px;
    /* height: 432px; */
  }
  .flex-column {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  margin-bottom: 10px;
  color: #ffffff;
`;

const PreTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  width: 631px;
`;

export { Container, Title, PreTitle };
