import React, { useState, useContext } from 'react';

import MinhaLogo from '../../assets/imagemlogo.png';
import { Centralizador, Container, Logo, StyledLink } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import { AuthContext } from '../../contexts/auth'
import { userInformationContext } from '../../contexts/userInformation';

const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const { image } = useContext(userInformationContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState( {placeholder: "Entrar", disabled: false} );
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('submit', { email, password });

    login(email,password,isLoading,setIsLoading);
    image(email,password);

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});

  }

return (
  <Centralizador>
    <Container>
      <Logo src={MinhaLogo} alt='Logo' />
      <form onSubmit={handleLogin}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" disabled={isLoading.disabled && "disabled"}  required/>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" disabled={isLoading.disabled && "disabled"} required />
        <Button type="submit" desabilitar={isLoading.disabled}>
        {isLoading.placeholder}
        </Button>
      </form>
      <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  </Centralizador>
);
}

export default LoginPage;


