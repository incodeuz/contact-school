import React from 'react'
import { Container, Icon, Title, Text , Button} from './style'

export const Notfound = () => {
  return (
    <Container>
        <Icon/>
        <Title>Uzr, <span>xatolik </span> ro‘y berdi!</Title>
        <Text>Asosiy menuga qaytish uchun tugmani bosing.</Text>
        <Button>Asosiy menu <Button.Arrow/> </Button>
    </Container>
  )
}
export default Notfound