import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 1440px;
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 0;
margin: auto;
` 

export const Word = styled.span`
color: rgba(0, 0, 0, 1);
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 54px;
text-align: center;
span{
    color: #FF9D42;
}
@media(max-width: 1200px){
    font-size: 40px;
    line-height:44px;
}
@media(max-width: 600px){
    font-size: 30px;
    line-height: 36px;
    padding: 0px 5px;
}
`

export const Text = styled.div`
margin-top: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align: center;
@media(max-width: 600px){
    font-size: 18px;
    line-height: 22px;
    padding: 0px 5px;
}
`

export const Wrapper = styled.div`
width: 80%;
margin-top: 70px;
padding: 40px 20px;
max-width: 1393px;
display: flex;
flex-wrap: wrap;
border-radius: 15px;
background-color: #ffffff;
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);


@media (max-width:800px){
    display: block;
}

`

export const Box = styled.div`
width: 33%;
display: flex;
padding: 20px;
align-items: center;
text-align: left;

@media (max-width:800px){
    width: 100%;
}
`

Box.Img = styled.img`
width: 25px;
margin: -25px 10px 0 0;

@media (max-width:800px){
    margin-top: 0;
}
`
Box.T = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
display: flex;
align-items: flex-end;



@media (min-width:800px) and (max-width:1198px){
    font-size: 12px;

}
`;
