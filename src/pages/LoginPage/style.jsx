import { Link } from "react-router-dom";
import styled from "styled-components";

const Centralizador = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
min-height: 100vh;
width: 90%;
display: flex;
flex-direction: column;

justify-content: start;
align-items: center;

background-color: #FFF;
`
const Logo = styled.img`
width: 180px;
height: 178.38px;
margin-top: 68px;
margin-bottom: 35px;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
  margin-top: 25px;
`;

export {
  Centralizador,
  Container,
  Logo,
  StyledLink
}