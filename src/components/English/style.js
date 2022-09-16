import styled from "styled-components";

export  const Container = styled.div`
width: 100%;
height: 100vh;
`

export const Wrap =styled.div`
margin-top: 100px;
text-align: center;
`

export const Text = styled.div`
font-style: normal;
font-weight: 900;
font-size: 45px;
line-height: 54px;
color: #FF9D42;

@media screen and (max-width: 930px){
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;    
}
`

export const Color = styled.span`
font-style: normal;
font-weight: 900;
font-size: 45px;
line-height: 54px;
color: #000000;

@media screen and (max-width: 930px){
    font-weight: 700;
    font-size: 30px;
    line-height: 36px; 
}

`
export const DescText = styled.div`
font-style: normal;
margin: auto;
margin-top: 25px;
font-weight: 400;
font-size: 20px;
line-height: 29px;
color: #8A90A5;
height: 87px;
width: 634px;

@media screen and (max-width: 930px){
    width: 305px;
    height: 145px;
    font-size: 18px;
    line-height: 29px;  
}
`
export const CardWrapper = styled.div`
width:70%; 
display: flex; 
flex-wrap: wrap;
margin: auto;
` 

export const Card = styled.div`
width: 620px;
height: 230px;
background: #FFFFFF;
border: 1px solid #EFF2F7;
border-radius: 10px;
box-sizing: border-box;
display: flex;
margin: auto;
margin-top: 30px;
`
export const WrapperCard = styled.div`

`

export const CardText = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #FF9D42;
margin-top: 40px;
margin-left: 40px;
`
export const CardFormat = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #323A56;
margin-left: 40px;
margin-top: 10px;

`
export const CardInfo = styled.div`
height: 72px;
width: 329px;
border-radius: nullpx;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #8A90A5;
margin-left: 40px;
margin-top: 20px;    
`
export const NumberWrapper = styled.div`
margin-top: 30px;
margin-left: 35px;

`

export const CardNumber =  styled.div`
font-style: normal;
font-weight: 900;
font-size: 140px;
line-height: 167px;
color: rgba(255, 157, 66, 0.65);
`
