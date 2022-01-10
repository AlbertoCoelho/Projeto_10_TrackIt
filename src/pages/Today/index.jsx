import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import { getHabits } from '../../services/api';

import { userInformationContext } from '../../contexts/userInformation'; 

const Today = () => {

  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const { percentHabits } = useContext(userInformationContext);

  const currentDay = dayjs().locale('pt-br');

  useEffect( () => {
    (async () => {
      const response = await getHabits();
      setHabits(response.data);
      setLoading(false);
    })(); 
  }, []);

  if(loading){
    return <div className="loading"><h1>Carregando dados...</h1></div>
  }

  return (
    <Wrapper>
      <Header />
      <span>
       <DayText>{currentDay.format('dddd, DD/MM')}</DayText>
       <PercentHabits percentHabits={percentHabits}>{percentHabits > 0 ? `${percentHabits*100}% dos hábitos concluídos` : `Nenhum hábito concluído ainda`}</PercentHabits>     
      </span>
      <Menu />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #E5E5E5;
  min-height: 88vh;
  margin-top: 70px;
  padding: 28px 18px 0px 18px;

  span {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: Lexend Deca;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
`

const DayText = styled.p`
    font-size: 23px;
    color: #126BA5;
`;

const PercentHabits = styled.p`
    font-family: Lexend Deca;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: ${props => props.PercentHabits > 0 ? "#8FC549" : "#BABABA"};
`;

export default Today;