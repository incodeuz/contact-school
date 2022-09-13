
import { Button } from './style'
import React from 'react'
import {   Container, Wrap, Text, Color, InputContainer, Input,  } from './style'
import {  Select, Option } from './style'

export const Kursgayozil = () => {
  return (
    <Container>
      <Wrap>
        <Text><Color>Kursga</Color> yozilish</Text>
     </Wrap>
        <InputContainer>
        <Input type={'text'} placeholder='ismingiz'/>
        <Input type={'text'} placeholder='Familyangiz'/>
        <Input type={'text'} placeholder='Telefoningiz'/>
        <Input type={'text'} placeholder='Emailngiz' />
        <Select>
        <Option value='Rus Tili'>Rus Tili</Option>
        <Option value='Arab Tili'>Arab Tili</Option>
        <Option value='Ingliz Tili'>Ingliz Tili</Option>
        </Select>
       
       <Button>Xabarni yuborish</Button>
        </InputContainer>
     
    </Container>
  )
}
export default Kursgayozil

