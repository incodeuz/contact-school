import React from 'react'
import { Block, Card, CardImg, Container, CT, Title, Wrapper, LinkImg } from './OurFounders'
import founder from '../../assets/images/founder.svg'
import tl from '../../assets/icons/Telegram_link.svg'
import yt from '../../assets/icons/Youtube_link.svg'
import ig from '../../assets/icons/Instagram_link.svg'


const OurFounders = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                <Title.T> bizning </Title.T>
                <Title.T yell> asoschilarimiz</Title.T>
            </Title>

            <Block>
                <Card fRight>
                    <CardImg src={founder}/>
                          
                    <CT>
                        <CT.Title>Fozilkhon Buzrukxojayev</CT.Title>
                        
                        <CT.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies faucibus mauris sit neque pellentesque mauris. Netus pulvinar lorem donec nec ac donec enim. Malesuada tempor aliquam turpis vitae sociis et nibh. Velit mi praesent tempus nulla.
                        </CT.Text>

                        <CT.Links>
                            <LinkImg src={tl} />
                            <LinkImg src={yt} />
                            <LinkImg src={ig} />
                        </CT.Links>
                    </CT>  
                </Card>
            </Block>

            <Block>
                <Card >
                    <CardImg src={founder}/>
                          
                    <CT>
                        <CT.Title>Fozilkhon Buzrukxojayev</CT.Title>
                        
                        <CT.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies faucibus mauris sit neque pellentesque mauris. Netus pulvinar lorem donec nec ac donec enim. Malesuada tempor aliquam turpis vitae sociis et nibh. Velit mi praesent tempus nulla.
                        </CT.Text>

                        <CT.Links>
                            <LinkImg src={tl} />
                            <LinkImg src={yt} />
                            <LinkImg src={ig} />
                        </CT.Links>
                    </CT>  
                </Card>
            </Block>
        </Wrapper>
    </Container>
  )
}

export default OurFounders