import React from 'react';
import {
  Button,
  Container,
  Hamburger,
  Title,
  Wrapper,
  Text,
  BoxMobile,
  Flexing,
  PhoneDiv,
} from './style';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as CallImg } from '../../assets/icons/call.svg';
import { ReactComponent as Bottom } from '../../assets/icons/bottom.svg';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const Navbar = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <Container>
        <Wrapper>
          <Link to='/home'>
            <Logo />
          </Link>
          <Title to='/home'>Asosiy</Title>
          <Title to='/course'>Kurslarimiz</Title>
          <Title to='/team'>Jamoa</Title>
          <div class='flex'>
            <CallImg />
            <Text marLeft>+998(71) 214-34-43</Text>
          </div>
          <Link to='/register'>
            <Button>Kursga Yozilish</Button>
          </Link>
          <div class='flex'>
            <Text without marRight>
              Uz
            </Text>
            <Bottom />
          </div>
          <Hamburger onClick={() => setModal(false)} />
        </Wrapper>
        {/* mobile */}
        <BoxMobile menu={modal}>
          <Flexing>
            <Flexing.Exit onClick={() => setModal(true)} />
            <Link to={'/register'} onClick={() => setModal(true)}>
              <Flexing.Btn>Kursga Yozilish</Flexing.Btn>
            </Link>
          </Flexing>
          <div>
            <BoxMobile.Item to='/home' onClick={() => setModal(true)}>
              Asosiy
            </BoxMobile.Item>
            <BoxMobile.Item to='/course' onClick={() => setModal(true)}>
              Kurslarimiz
            </BoxMobile.Item>
            <BoxMobile.Item to='/team' onClick={() => setModal(true)}>
              Jamoa
            </BoxMobile.Item>
          </div>
          <PhoneDiv>
            <CallImg />
            <PhoneDiv.Text>+998(71) 214-34-43</PhoneDiv.Text>
          </PhoneDiv>
        </BoxMobile>
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
