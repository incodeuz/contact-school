import React, { useState } from "react";
import {
  Card,
  Container,
  PreTitle,
  Title,
  Img,
  FlexCon,
  FlexCon2,
} from "./style";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Imga from "../../assets/images/ielts.png";
import { cardData } from "../../utils/card";

const Carousel = () => {
  const [cardView, setCardView] = useState(1.6);
  return (
    <Container card={[cardView, setCardView]}>
      <div className="flex-column">
        <Title>Bizning o’quvchilar</Title>
        <PreTitle>
          Bizning o’quvchilar dunyodagi TOP universitetlarga GRANT’lar
          yutishgan. Buyuk Britaniya, AQSH va boshqa oldi mamlakatlardagi
          xalqaro o’qishlarga kirib IELTS’dan 8,5 ballgacha olishgan. Juda ham
          ko’plab o’quvchilarimiz O’zbekistondagi Westminster, MDIST va boshqa
          universitetlar talabalari.
        </PreTitle>
      </div>
      <>
        <Swiper
          slidesPerView={cardView}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="hallo">
            <Card>
              <div className="flex">
                <Img src={Imga} />
                <div className="flex-column">
                  <Card.Title>Abdulloh Qiyomov</Card.Title>
                  <FlexCon>
                    {cardData.map((value) => {
                      return (
                        <FlexCon2>
                          <p className="thin">{value.title}</p>
                          <p className="bold">{value.score}</p>
                        </FlexCon2>
                      );
                    })}
                  </FlexCon>
                  <FlexCon2 align>
                    <p className="bold">Bandscore:</p>
                    <Card.Title>8.0</Card.Title>
                  </FlexCon2>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <Card>
              <div className="flex">
                <Img src={Imga} />
                <div className="flex-column">
                  <Card.Title>Abdulloh Qiyomov</Card.Title>
                  <FlexCon>
                    {cardData.map((value) => {
                      return (
                        <FlexCon2>
                          <p className="thin">{value.title}</p>
                          <p className="bold">{value.score}</p>
                        </FlexCon2>
                      );
                    })}
                  </FlexCon>
                  <FlexCon2 align>
                    <p className="bold">Bandscore:</p>
                    <Card.Title>8.0</Card.Title>
                  </FlexCon2>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <Card>
              <div className="flex">
                <Img src={Imga} />
                <div className="flex-column">
                  <Card.Title>Abdulloh Qiyomov</Card.Title>
                  <FlexCon>
                    {cardData.map((value) => {
                      return (
                        <FlexCon2>
                          <p className="thin">{value.title}</p>
                          <p className="bold">{value.score}</p>
                        </FlexCon2>
                      );
                    })}
                  </FlexCon>
                  <FlexCon2 align>
                    <p className="bold">Bandscore:</p>
                    <Card.Title>8.0</Card.Title>
                  </FlexCon2>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <Card>
              <div className="flex">
                <Img src={Imga} />
                <div className="flex-column">
                  <Card.Title>Abdulloh Qiyomov</Card.Title>
                  <FlexCon>
                    {cardData.map((value) => {
                      return (
                        <FlexCon2>
                          <p className="thin">{value.title}</p>
                          <p className="bold">{value.score}</p>
                        </FlexCon2>
                      );
                    })}
                  </FlexCon>
                  <FlexCon2 align>
                    <p className="bold">Bandscore:</p>
                    <Card.Title>8.0</Card.Title>
                  </FlexCon2>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </>
    </Container>
  );
};

export default Carousel;
