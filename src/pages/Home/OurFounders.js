import styled from "styled-components";

export const Container = styled.div`
padding: 100px 0;
width: 100%;
max-width: 1920px;
display: flex;
justify-content: center;
`;

export const Wrapper = styled.div`
width: 80%;

@media (max-width:750px){
    width: 100%;
}
`
export const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
Title.T =styled.p`
font-family: 'Inter';
font-size: 48px;
font-weight: 700;
color: ${({yell})=> yell ? 'rgba(255, 157, 66, 1)':'rgba(0,0,0, 1)'};
text-transform: capitalize;
margin-left: ${({yell})=> yell ? '10px':'0'};

@media (max-width: 1100px){
    font-size: 30px;
}
@media (max-width: 1100px){
    font-size: 30px;
}
`


export const Block = styled.div`
width: 100%;

@media (max-width:950px){
    display: flex;
    justify-content: center;
}


`

export const Card = styled.div`
margin-top: 50px;
float: ${({fRight})=> fRight ? 'right' : 'left'};
max-width: 65%;
padding: 25px 25px;
border-radius: 30px;
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: ${({fRight})=> fRight ? 'none' : 'row-reverse'} ;
justify-content: space-between;

@media (max-width:900px){
    display: block;
    text-align: center;
}

@media (max-width:750px){
    width: 100%;
    max-width: 90%;
}
`
export const CardImg = styled.img`
width: 300px;
max-width: 300px;


@media (max-width:1100px){
    width: 250px;
}
@media (max-width:950px){
    width: 200px;
}
@media (max-width:750px){
    width: 100%;
}
@media (max-width:576px){
    width: 230px;
}
`
export const CT = styled.div`
width: 400px;
max-width: 400px;
max-width: 400px;
padding:25px 25px;
display: flex;
flex-wrap: wrap;

@media (max-width:750px){
    width: 100%;
    max-width: 100%;
    text-align: center;
}
`
CT.Title = styled.p`
width: 100%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 36px;
color: #000000;

@media (max-width:1100px){
    font-size: 15px;
}
@media (max-width:576px){
    font-size: 23px;
}
`
CT.Text = styled.p`
width:100%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #000000;

@media (max-width:1100px){
    font-size: 14px;
}
`

CT.Links = styled.div`
display: flex;
width: 100%;

@media (max-width:900px){
    justify-content: center;
}
`
export const LinkImg = styled.img`
width: 45px;
margin-left: 10px;
cursor: pointer;

@media (max-width:750px){
    margin-left: 5px;
    width: 30px;
}
`
