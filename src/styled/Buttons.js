import styled from "styled-components"

export const Button = styled.button`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding : 10px 18px;
gap : 10px;

min-width : 150px;
height : 44px;
border : none;

background: #000000;
border-radius: 5px;
color : white;
font-size : 16px;
font-family : Poppins;
cursor : pointer;
transition: 0.4 s background ease-in;


&:hover {
background-color : white;
border : 1px solid black;
color : black;
transition: 0.3s background ease-in;
cursor : pointer;
}
`;
export const OutlineButton = styled(Button)`

background-color : white;
border : 1px solid black;
color : black;

&:hover {
background-color : black;
border : 1px solid transparent;
color : white;
}

`;
