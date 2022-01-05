import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  color: #FFFFFF;

  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;

  padding: 14px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;