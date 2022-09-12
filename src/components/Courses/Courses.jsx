import { Cardbox, Card, CardButton, CardText, CardSpan, Names, LastOne, Wrapper } from './style'
import React from 'react'
import { Container, Wrap, Text, Color, Btn } from './style'
import { courseData } from '../../Mock/course'

export const Courses = () => {
  return (
    <Container>  

       <Wrap>
          <Text> <Color>Bizning</Color> kurslarimiz</Text>  
          <Btn>Kursga yozilish</Btn>
       </Wrap>

       <Cardbox>

        {
          courseData.map((value) =>{
            return(
              <Card key={value.id}>
                
                <Wrapper>
                <value.icons className='ikon'/>
                <CardButton>{value.btn}</CardButton>
                </Wrapper>

                <CardText>{value.title} <CardSpan>{value.title1}</CardSpan> </CardText>
                <Names>{value.name1}</Names>
                <Names>{value.name2}</Names>
                <LastOne>{value.title2}</LastOne>

              </Card>
            )
          })
        }

       </Cardbox>




    </Container>
  )
}



export default Courses