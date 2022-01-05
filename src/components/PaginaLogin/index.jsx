import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MinhaLogo from '../../assets/imagemlogo.png';
import { Centralizador, Container, Logo, StyledLink } from './style';
import Button from '../Button';
import Input from '../Input';

export default function PaginaLogin({setToken, setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
      email,
      password
    });

    promise.then( response => {
      console.log(response.data);
      setUser(response.data);
      setToken(response.data.token);
      navigate('/hoje')
    });
    promise.catch(alert("Usuário não cadastrado, faça seu cadastro."));
  }


return (
  <Centralizador>
    <Container>
      <Logo src={MinhaLogo} alt='Logo' />
      <form onSubmit={handleLogin}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  </Centralizador>
);
}



