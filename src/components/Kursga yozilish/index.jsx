
import { Button, InputTitle } from './style'
import React from 'react'
import {   Container, Wrap, Text, Color, InputContainer, Input,  } from './style'


export const Kursgayozil = () => {
  return (
    <Container>
      <Wrap>
        <Text><Color>Kursga</Color> yozilish</Text>
     </Wrap>
        <InputContainer>
        <InputTitle>Kursga yozilish</InputTitle>
        <Input type={'text'} placeholder='ismingiz'/>
        <Input type={'text'} placeholder='Familyangiz'/>
        <Input type={'text'} placeholder='Telefoningiz'/>
        <Input type={'text'} placeholder='Emailngiz' />
        
       
       <Button >Xabarni yuborish</Button>
        </InputContainer>
     
    </Container>
  )
}
export default Kursgayozil

