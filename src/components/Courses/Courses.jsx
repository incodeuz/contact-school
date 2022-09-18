import {
  Cardbox,
  Card,
  CardButton,
  CardText,
  CardSpan,
  Names,
  LastOne,
  Wrapper,
  NamesWrapper,
  Flexing,
} from './style';
import React from 'react';
import { Container, Wrap, Text, Color, Btn } from './style';
import { courseData } from '../../mock/course';
import { useNavigate } from 'react-router-dom';

export const Courses = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrap>
        <Text>
          {' '}
          <Color>Bizning</Color> kurslarimiz
        </Text>
        <Flexing>
          <Btn to={'/register'}>Kursga yozilish</Btn>
        </Flexing>
      </Wrap>

      <Cardbox>
        {courseData.map((value) => {
          return (
            <Card key={value.id}>
              <Wrapper>
                <value.icons className='ikon' />
                <CardButton>{value.btn}</CardButton>
              </Wrapper>

              <CardText>
                {value.title} <CardSpan>{value.title1}</CardSpan>{' '}
              </CardText>

              <NamesWrapper>
                <Names>{value.name1}</Names>
                <Names>{value.name2}</Names>
              </NamesWrapper>

              <div>
                <LastOne onClick={() => navigate(`/course/${value.id}`)}>
                  Batafsil
                </LastOne>
              </div>
            </Card>
          );
        })}
      </Cardbox>
    </Container>
  );
};

export default Courses;
