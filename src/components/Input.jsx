import styled from "styled-components";

const Input = styled.input`
  height: 45px;
  width: 100%;

  border: 1px solid #D4D4D4;
  background-color: #FFFFFF;
  color: #222222;

  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: left;

  padding: 14px;
  margin-bottom: 10px;
  border-radius: 4px;

  ::placeholder {
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export default Input;