import React from 'react'
import { Container, Icon, Title,  Wrap } from './style'
import { Color } from './style'
import { Text } from './style'
import { Flexing, Button } from './style'

export const Notfound = () => {
  return (
    <Container>
      <Wrap>
        <Icon/>
      </Wrap>
        <Title>Uzr, <Color>xatolik </Color> ro‘y berdi!</Title>
        <Text>Asosiy menuga qaytish uchun tugmani bosing.</Text>
        <Flexing>
        <Button>Asosiy menu</Button>
        </Flexing>
    </Container>
  )
}
export default Notfound