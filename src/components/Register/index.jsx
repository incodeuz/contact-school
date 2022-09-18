import { Button, InputTitle, SelectHandle } from './style';
import React from 'react';
import { Container, Wrap, Text, InputContainer, Input } from './style';

export const Register = () => {
  return (
    <Container>
      <Wrap>
        <Text>
          <span>Kursga</span> yozilish
        </Text>
      </Wrap>
      <InputContainer>
        <InputTitle>Kursga yozilish</InputTitle>
        <Input type={'text'} placeholder='ismingiz' />
        <Input type={'text'} placeholder='Familyangiz' />
        <Input type={'text'} placeholder='Telefoningiz' />
        <Input type={'text'} placeholder='Emailngiz' />
        {/* select */}
        <SelectHandle>
          <option value='1'>Not Identified</option>
          <option value='2'>Closed</option>
          <option value='3'>Communicated</option>
          <option value='4'>Identified</option>
          <option value='5'>Resolved</option>
          <option value='6'>Cancelled</option>
        </SelectHandle>

        <Button>Xabarni yuborish</Button>
      </InputContainer>
    </Container>
  );
};
export default Register;
