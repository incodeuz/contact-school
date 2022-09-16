import styled from "styled-components";

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
  .bold {
    font-weight: 900;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    /* line-height: 22px; */
    /* identical to box height */

    color: #000000;
    @media screen and (max-width: 1000px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
  .thin {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #000000;
    @media screen and (max-width: 1000px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
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
    @media screen and (max-width: 500px) {
      width: 35px;
      font-size: 20px;
      height: 35px;
    }
  }
  .mySwiper {
    max-width: 1300px;
    width: 100%;
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
    @media screen and (max-width: 500px) {
      ${({ card }) => window.innerWidth <= 500 && card[1](1)};
      width: 35px;
      font-size: 20px;
      height: 35px;
    }
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
  @media screen and (max-width: 1300px) {
    padding: 44px 30px;
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
  @media screen and (max-width: 500px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    color: #ffffff;
  }
`;

const PreTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  max-width: 631px;
  width: 100%;
  @media screen and (max-width: 500px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;
  }
`;

const Card = styled.div`
  max-width: 761px;
  width: 100%;
  height: 432px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .flex-column {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      width: 272px;
      height: 390px;
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 272px;
    height: 445px;
  }
`;

const Img = styled.img`
  /* width: 100px; */
  @media screen and (max-width: 1000px) {
    width: 150px;
    height: 159.22px;
  }
`;

Card.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 13px;
  color: #000000;
  @media screen and (max-width: 1000px) {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
  }
`;

const FlexCon = styled.div`
  display: flex;
  flex-direction: ${({ align }) => (align ? "row" : "column")};
  align-items: center;
`;

const FlexCon2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

export { Container, Title, PreTitle, Card, Img, FlexCon, FlexCon2 };
