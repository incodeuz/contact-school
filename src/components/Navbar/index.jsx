import React, { useState } from "react";
import { Button, Container, Hamburger, Title, Wrapper, Text } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as CallImg } from "../../assets/icons/call.svg";
import { ReactComponent as Bottom } from "../../assets/icons/bottom.svg";
import { Link, Outlet } from "react-router-dom";
import Exit from "../../assets/icons/exit.png";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/home">
            <Logo />
          </Link>
          {!modal && (
            <div className="wrapper">
              <Title to="/home">Asosiy</Title>
              <Title to="/course">Kurslarimiz</Title>
              <Title to="/team">Jamoa</Title>

              <div class="flex">
                <CallImg />
                <Text marLeft>+998(71) 214-34-43</Text>
              </div>
              <Link to="/register">
                <Button>Kursga Yozilish</Button>
              </Link>
              <div class="flex">
                <Text without marRight>
                  Uz
                </Text>
                <Bottom />
              </div>
            </div>
          )}
          {!modal ? (
            <Hamburger onClick={() => setModal(!modal)} />
          ) : (
            <img className="rasm" src={Exit} onClick={() => setModal(!modal)} />
          )}
          {<Hamburger /> && modal && (
            <div className="abs">
              <div className="flex">
                <div class="flex">
                  <Text without marRight>
                    Uz
                  </Text>
                  <Bottom />
                </div>
                <Link to="/register">
                  <Button>Kursga Yozilish</Button>
                </Link>
              </div>
              <Title to="/home">Asosiy</Title>
              <Title to="/course">Kurslarimiz</Title>
              <Title to="/team">Jamoa</Title>
                <div class="flex">
                  <CallImg />
                  <Text marLeft>+998(71) 214-34-43</Text>
                </div>
            </div>
          )}
        </Wrapper>
      </Container>
      <Outlet />
      <h1>
        Footer Navbar Componenetda turibdi kim Footerni qilsa shu h1 ni orniga
        olib kelsin
      </h1>
    </>
  );
};

export default Navbar;
