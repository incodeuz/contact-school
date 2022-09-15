import React from "react";
import { Container, Image, PreTitle, Title } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../../assets/images/card.png";

const Carousel = () => {
  return (
    <Container>
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
          slidesPerView={1.6}
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
            <img src={Img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <img src={Img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <img src={Img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="hallo">
            <img src={Img} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </Container>
  );
};

export default Carousel;
