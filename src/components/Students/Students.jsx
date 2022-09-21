import React, { useState } from 'react';
import {
  Card,
  Container,
  PreTitle,
  Title,
  Img,
  FlexCon,
  FlexCon2,
} from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Imga from '../../assets/images/ielts.png';
import { studentsData } from '../../mock/students';

const Students = () => {
  const [cardView, setCardView] = useState(1.3);

  return (
    <Container card={[cardView, setCardView]}>
      <div className='flex-column'>
        <Title>Bizning o’quvchilar</Title>
        <PreTitle>
          Bizning o’quvchilar dunyodagi TOP universitetlarga GRANT’lar
          yutishgan. Buyuk Britaniya, AQSH va boshqa oldi mamlakatlardagi
          xalqaro o’qishlarga kirib IELTS’dan 8,5 ballgacha olishgan. Juda ham
          ko’plab o’quvchilarimiz O’zbekistondagi Westminster, MDIST va boshqa
          universitetlar talabalari.
        </PreTitle>
      </div>
      <div style={{ width: '100%' }}>
        <Swiper
          slidesPerView={cardView}
          centeredSlides={true}
          grabCursor={true}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
          spaceBetween={10}
        >
          {studentsData.map((value) => {
            return (
              <SwiperSlide key={value.id} className='hallo'>
                <Card>
                  <div className='flex'>
                    <Img src={Imga} />
                    <div className='flex-column'>
                      <Card.Title>{value.name}</Card.Title>
                      <FlexCon>
                        <FlexCon2>
                          <p className='thin'>Listening:</p>
                          <p className='bold'>{value.listening}</p>
                        </FlexCon2>
                        <FlexCon2>
                          <p className='thin'>Speaking:</p>
                          <p className='bold'>{value.speaking}</p>
                        </FlexCon2>
                        <FlexCon2>
                          <p className='thin'>Writing:</p>
                          <p className='bold'>{value.writing}</p>
                        </FlexCon2>
                        <FlexCon2>
                          <p className='thin'>Readining:</p>
                          <p className='bold'>{value.reading}</p>
                        </FlexCon2>
                      </FlexCon>
                      <FlexCon2 align>
                        <p className='bold'>Bandscore:</p>
                        <Card.Title>{value.band}</Card.Title>
                      </FlexCon2>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default Students;
