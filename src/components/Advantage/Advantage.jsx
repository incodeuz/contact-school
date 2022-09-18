import React from 'react'
import {Container, Word, Text, Wrapper, Box} from './style'
import {afzallik} from '../../utils/afzallik'

export const Advantage = () => {
  return (
    <Container>

        <Word><span> “CONTACT SCHOOL“ </span> o’quv markazi afzaliklari</Word>
        <Text>Har bir o'quvchimiz quyidagi Avzallikka ega boladi ega bo'ladi</Text>
              
            <Wrapper>
                {afzallik.map((item)=>{
                    return(
                        <Box key={item.id}>
                            <Box.Img src={item.icon}/>
                            <Box.T>{item.text}</Box.T>
                        </Box>
                    )})}
            </Wrapper>
    </Container>
  )
}

export default Advantage