import React, { useState } from 'react';
import {
  Container,
  Card,
  Icon,
  MassageCard,
  Content,
  Title,
  Textarea,
  MapWrapper,
} from './style';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Connection = () => {
  const [center, setCenter] = useState({
    lat: 41.311081,
    lng: 69.240562,
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
  });

  const onMapClick = (e) => {
    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };

  return (
    <>
      <Container>
        <h1>Biz bilan bog’lanish</h1>

        <div className='flex'>
          <Card>
            <Icon>
              <a href='tel:+99871 214-34-43'>
                <Icon.Call />
              </a>
            </Icon>
            <Card.Title>
              <h2>Telefon raqamlar</h2>
              <p>+998(71) 214-34-43</p>
            </Card.Title>
          </Card>

          <Card>
            <Icon>
              <a href='https://Loremsum@gmail.com'>
                <Icon.Massage />
              </a>
            </Icon>
            <Card.Title>
              <h2>Email manzilimiz</h2>
              <p>Lorem@gmail.com</p>
              <br />
              <p>Loremsum@gmail.com</p>
            </Card.Title>
          </Card>

          <Card>
            <Icon>
              <Icon.Maps />
            </Icon>
            <Card.Title>
              <h2>Joylashuvimiz</h2>
              <p>Shifokorlar ko’chasi</p>
              <br />
              <p>Olmazor tumani</p>
            </Card.Title>
          </Card>
        </div>

        <Container.Flex>
          <MassageCard>
            <h2>Xabar yuborish</h2>
            <MassageCard.Input type='text' placeholder='ismingiz' />
            <MassageCard.Input type='text' placeholder='familyanfiz' />
            <MassageCard.Input type='number' placeholder='telefoningiz' />
            <MassageCard.Input type='email' placeholder='emailingiz' />
            <Textarea xabar='true' type='text' placeholder='xabarizni yozing' />
            <button>Xabarni yuborish</button>
          </MassageCard>

          <Content>
            <Title>Bepul maslahat</Title>
            <br />
            <Title> olishni xohlaysizmi?</Title>
            <h2>Sizni savollar qiynayotgan bo’lsa, hoziroq</h2>
            <h2>bizga qo’ng’iroq qiling!</h2>
          </Content>
        </Container.Flex>
      </Container>

      {/* Map */}
      <MapWrapper>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={onMapClick}
          >
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </MapWrapper>
    </>
  );
};

export default Connection;
