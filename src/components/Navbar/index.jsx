import React from 'react';
import { Button, Container, Hamburger, Title, Wrapper, Text } from './style';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as CallImg } from '../../assets/icons/call.svg';
import { ReactComponent as Bottom } from '../../assets/icons/bottom.svg';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Navbar = () => {
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
          <Hamburger />
        </Wrapper>
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
