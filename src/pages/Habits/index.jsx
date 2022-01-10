import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

import Header from '../../components/Header';
import HabitRegister from '../../components/HabitRegister';

import { getHabits } from '../../services/api';


const Habits = () => {

  const [habits, setHabits] = useState([]);
  const [addHabit, setAddHabit] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    (async () => {
      const response = await getHabits();
      setHabits(response.data);
      setLoading(false);
    })(); 
  }, []);

  return (
    <Wrapper>
      <Header />
      <Menu>
        <span>Meus hábitos</span>
        <button onClick={() => setAddHabit(true)}>+</button>
      </Menu>
      {addHabit ? <HabitRegister setAddHabit={setAddHabit} /> : ""}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 0px;
  padding: 22px 18px 0px 18px;
  p {
      margin-top: 29px;
      font-size: 18px;
      color: #666666;
  }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 23px;
      color: #126BA5;
      font-family: Lexend Deca;
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 27px;
        text-align: center;
        color: #FFFFFF;

        cursor: pointer;
    }
`;

export default Habits;