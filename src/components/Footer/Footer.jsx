import React from 'react'
import { Container, Card, Logo } from './style'
const Footer = () => {
  return (
    <Container>
      <Container.Wrapper>

        <Container.Flex>
          <Card start='strue' >
            <Container.Log />
            <Container.LogMobile />
          </Card>

          <Card center='true'>
            <a href='https://Loremsum@gmail.com'><Logo><Logo.Telegram /></Logo></a>
            <a href='https://Loremsum@gmail.com'> <Logo><Logo.Youtube /></Logo></a>
            <a href='https://Loremsum@gmail.com'><Logo><Logo.Instagram /></Logo></a>
          </Card>
        </Container.Flex>

        <Card link='true'>
          <div>
            <h4>Asosiy </h4>
            <h4>Afzaliklar  </h4>
            <h4>O’quvchilar  </h4>
          </div>
          <div>
            <h4>Kurslar </h4>
            <h4>Savollar  </h4>
            <h4>Bog’lanish  </h4>
          </div>
          <div>
            <h4>Jamoa  </h4>
            <h4>O’qituvchilar   </h4>
            <h4>Asoschilar  </h4>
          </div>
        </Card>

      </Container.Wrapper>
    </Container >
  )
}

export default Footer