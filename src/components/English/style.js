import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 0;
font-family: 'Inter';
span{display:flex; gap:15px}
h3{
text-align: center;
font-weight: 700;
font-size: 45px;
color: #111;
text-align: center;
}
h4{
text-align: center;
font-weight: 700;
font-size: 45px;
color: #FF9D42;
text-align: center;
}
h5{
width: 634px !important;
font-weight: 400;
font-size: 20px;
line-height: 29px;
color: #8A90A5;
text-align: center;
}
@media only screen and (max-width: 768px) {
padding:  15px;
gap: 15px;
h3{font-size:30px}
h4{font-size:30px}
h5{
width: 100% !important; font-size:16px}
}
`
Container.Wrapper = styled.div`
width: 1300px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 34px;
margin-top: 30px;
@media only screen and (max-width: 1300px) {
width: 100%;
}
@media only screen and (max-width: 768px) {
flex-direction: column;
gap: 15px;
}
`

export const Card = styled.div`
width: 620px;
background: #FFFFFF;
border: 1px solid hsl(90deg 0% 0% / 0.02);
border-radius: 10px;
display: flex;
padding: 30px 26px;
box-shadow: 0px 3px 7px hsl(90deg 0% 0% / 0.05);
cursor: pointer;
@media only screen and (max-width: 768px) {
padding: 20px 15px;
width: 100%;
}
`

Card.Wrapper = styled.div`
h1{
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #FF9D42;
}
h2{
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #323A56;
}
p{
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #8A90A5;
object-fit: cover;
  }

`
Card.Flex = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`


Card.Number = styled.div`
width: 191px;
height: 167px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 138px;
line-height: 167px;
color: rgba(255, 157, 66, 0.65);
@media only screen and (max-width: 768px) {
display: none;
}
`

Card.Mobile = styled.div`
width: 124px;
height: 98px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 100px;
line-height: 167px;
color: rgba(255, 157, 66, 0.65);
display: none;
@media only screen and (max-width: 768px) {
display: flex;
}
`
