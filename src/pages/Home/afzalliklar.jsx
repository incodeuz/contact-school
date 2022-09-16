import React from 'react'
import {Container, Title, Orange, Word, Text, Wrapper, Box} from './afzalliklar'
import {afzallik} from '../../utils/afzallik'

export const Afzalliklar = () => {
  return (
    <Container>
        <Title>

            <Title>
                <Orange> “CONTACT SCHOOL“ </Orange> 
                <Word>o’quv markazi afzaliklari</Word>
                <Text>Har bir o'quvchimiz quyidagi afzalliklarga ega bo'ladi</Text>
            </Title>
              
            <Wrapper>
                {afzallik.map((item)=>{
                    return(
                        <Box key={item.id}>
                            <Box.Img src={item.icon}/>
                            <Box.T>{item.text}</Box.T>
                        </Box>
                    )})}
            </Wrapper>
        </Title>
    </Container>
  )
}

export default Afzalliklar