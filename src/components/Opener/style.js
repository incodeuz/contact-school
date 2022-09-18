import styled from "styled-components";
import main from '../../assets/images/main.png'
import mobile from '../../assets/images/mobile.png'


export const Container = styled.div`
width: 100%;
height: calc(100vh - 132px); 
background-image: url(${main});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

span {
    color: #FF9D42;
}
@media (max-width: 600px) { 
    background-image: url(${mobile});
  }

`
export const Flexing = styled.div`

`
export const Text = styled.div`
width: 638px;
height: 201px;
font-style: normal;
font-weight: 700;
font-size: 55px;
line-height: 67px;
text-align: center;
color: #FFFFFF;
@media (max-width: 600px) {
    width: 347px;
    height: 184px;
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 46px;
  }
`
export const Text1 = styled.div`
width: 405px;
height: 51px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
margin:auto;
text-align: center;
margin-top: 25px;
span {
   color: #FF9D42;
}
@media (max-width: 600px) {
    width: 284px;
    height: 66px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    
}
`
export const Wrapper = styled.div`
text-align: center;
`
export const Btn = styled.button`
width: 180px;
height: 48px;
background: #FF9D42;
border-radius: 12px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
border: none;
cursor: pointer;
margin-top: 64px;
@media (max-width: 600px) {
    width: 150px;
    height: 44px;
    font-size: 18px;
    line-height: 22px;
    margin-top: 30px;
}
`
