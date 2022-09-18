import React from 'react'
import { Container, Card } from './style'
import {englishData} from '../../mock/english'
const App = () => {
  return (
    <Container>
      <span>
        <h3>Ingliz </h3><h4> Tili</h4>
      </span>
      <h5>Oflayn kurslarimiz yordamida siz tanlagan yo’nalishingiz bo‘yicha
        boshlang’ich bilimlarni egallaysiz, portfolio yaratish bo’yicha kerakli
        ko’nikmalarga ham ega bo’lasiz!</h5>
      <Container.Wrapper>

        {
        englishData.map((value) => {

          return ( <Card key={value.id}>
            <Card.Wrapper>
              <Card.Flex>
                <div>
                  <h1>{value.title}</h1>
                  <h2>{value.format}</h2>
                </div>

                <Card.Mobile >{value.num}</Card.Mobile>
              </Card.Flex>

              <p>{value.desc}</p>
            </Card.Wrapper>
            <Card.Number>{value.num}</Card.Number>
          </Card>
          )
        })
      }
      </Container.Wrapper>
    </Container>
  )
}

export default App