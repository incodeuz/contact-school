import React from "react";
import { Button, Container, Hamburger, Title } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as CallImg } from "../../assets/icons/call.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Title>Asosiy</Title>
      <Title>Kurslarimiz</Title>
      <Title>Jamoa</Title>
      <div class="flex">
        <CallImg />
        <Title marLeft>+998(71) 214-34-43</Title>
      </div>
      <Button>Kursga Yozilish</Button>
      <div class="flex">
        <Title without marRight>
          Uz
        </Title>
        <Bottom />
      </div>
      <Hamburger />
    </Container>
  );
};

export default Navbar;
