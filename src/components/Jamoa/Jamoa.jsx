import React from 'react'
import { teamData } from '../../mock/team'
import { Container, Flexing, Name1, Card, Title, Img, Name } from './style'

export const Jamoa = () => {
  return (
    <Container>

      <h1>Bizning profesional <span>jamoamiz</span> </h1>
        <Flexing>
          
            {teamData.map((value)=> {
                return(
                 <Card key={value.id}>
                     <Img src={value.img}/>
                     <Title>

                     <Name>{value.name}</Name>
                     <Name1>{value.title}</Name1>

                     </Title>
                 </Card>
                );
            })}
        </Flexing>
    </Container>
  )
}
export default Jamoa