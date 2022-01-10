import styled from "styled-components";
import React, { useContext } from 'react';

import { userInformationContext } from '../contexts/userInformation'

const Header = () => {

  const { userImage } = useContext(userInformationContext);
  console.log(userImage);

  return (
    <HeaderComponent>
      <h1>TrackIt</h1>
        <img src={userImage} alt="User Image"/>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0px;
  top: 0px;
  padding: 0 18px;

  width: 100%;
  height: 70px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: Playball;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;


export default Header;