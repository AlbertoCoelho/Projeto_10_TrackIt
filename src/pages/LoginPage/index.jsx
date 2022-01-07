import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import MinhaLogo from '../../assets/imagemlogo.png';
import { Centralizador, Container, Logo, StyledLink } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

const LoginPage = ({setToken, setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(false)
  const [isLoading, setIsLoading] = useState( {placeholder: "Entrar", disabled: false} );
  const navigate = useNavigate();

  const changeButton = () => {
    disableButton ? setDisableButton(false) : setDisableButton(true);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
      email,
      password
    });

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});


    promise.then( response => {
      console.log(response.data);
      setUser(response.data);
      setToken(response.data.token);
      setIsLoading(false);
      navigate('/hoje')
    });
    promise.catch(() => {
      alert("Usuário não cadastrado, faça seu cadastro.");
      isLoading.placeholder = "Entrar";
    });

  }

return (
  <Centralizador>
    <Container>
      <Logo src={MinhaLogo} alt='Logo' />
      <form onSubmit={handleLogin}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" disabled={isLoading.disabled && "disabled"}  required/>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" disabled={isLoading.disabled && "disabled"} required />
        <Button type="submit" desabilitar={disableButton} onClick={changeButton} >
        {isLoading.placeholder}
        </Button>
      </form>
      <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  </Centralizador>
);
}

export default LoginPage;


