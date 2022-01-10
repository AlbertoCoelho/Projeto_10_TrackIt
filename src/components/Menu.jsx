import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext} from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { userInformationContext } from "../contexts/userInformation";

import { getHabits } from "../services/api";

const Menu = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const {percentHabits, setPercentHabits} = useContext(userInformationContext);
  

  useEffect( () => {
    (async () => {
      const response = await getHabits();
      setPercentHabits((response.data.filter((habit) => habit.done === true).length / response.data.length).toFixed(2));
      setLoading(false);
    })(); 
  }, []);

  if(loading){
    return <div className="loading"><h1>Carregando dados...</h1></div>
  }

  return (
    <MenuComponent>
      <Button onClick={() => navigate("/habitos")}>
        <span>Hábitos</span>
      </Button>

      <div>
        <Link to={"/hoje"}>
          <CircularProgressbarWrapper>
            <CircularProgressbar
              value={percentHabits*100}
              text={"Hoje"}
              styles={buildStyles({
                  textColor: "#fff",
                  textSize: '24px',
                  pathColor: "#fff",
                  trailColor: `rgba(0,0,0,0.0)`
              })} />
          </CircularProgressbarWrapper>
        </Link>
      </div>

      <Button onClick={() => navigate("/historico")}>
        <span>Histórico</span>
      </Button>

    </MenuComponent>
  );
}

const MenuComponent = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0px 32px;
    bottom: 0px;
    height: 70px;
    width: 100%;
    background: #FFFFFF;

    span {
      font-size: 17.98px;
      color: #52B6FF;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 25px;
        left: calc(50% - 45px);
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 45px;
    }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
`

const CircularProgressbarWrapper = styled.div`
    width: 80px;
    height: 80px;
    cursor: pointer;
`;

export default Menu;