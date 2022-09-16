import { Card, CardFormat, CardInfo, CardNumber, CardText, CardWrapper, NumberWrapper, WrapperCard } from './style'
import React from 'react'
import { Color, Container, Wrap, Text, DescText } from './style'
import { englishData } from '../../mock/english'

export const English = () => {
  return (
    <Container>

        <Wrap>
            <Text> <Color>Ingliz</Color> Tili</Text>
            <DescText>Oflayn kurslarimiz yordamida siz tanlagan yo’nalishingiz bo‘yicha 
              boshlang’ich bilimlarni egallaysiz, portfolio yaratish bo’yicha kerakli 
              ko’nikmalarga ham ega bo’lasiz!</DescText>
        </Wrap>
            
      <CardWrapper>

         {
            englishData.map((value) => {
                return(
                    <Card key={value.id}>
                        <WrapperCard>
                            <CardText>{value.title}</CardText>
                            <CardFormat>{value.format}</CardFormat>
                            <CardInfo>{value.desc}</CardInfo>
                        </WrapperCard>

                        <NumberWrapper>
                            <CardNumber>{value.num}</CardNumber>
                        </NumberWrapper>
                    
                    </Card>
                )
            })
         }

     </CardWrapper>
          

    

    </Container>
  )
}


export default English