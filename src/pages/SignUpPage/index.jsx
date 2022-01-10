import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import MinhaLogo from '../../assets/imagemlogo.png';
import { Centralizador, Container, Logo, StyledLink } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

const SignUp = () => {

  const [ formData, setFormData ] = useState({
    email:"",
    name:"",
    image:"",
    password:""
  });

  const [isLoading, setIsLoading] = useState( {placeholder: "Cadastrar", disabled: false} );

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
      ...formData
    })

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});

    promise.then( response => {
      console.log(response);
      setIsLoading(false);
      navigate("/")
    });
    promise.catch(() => {
      alert("Por favor, preenche os dados corretamente");
      isLoading.placeholder = "Cadastrar";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    });
  } 

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


return (
  <Centralizador>
    <Container>
      <Logo src={MinhaLogo} alt='Logo' />
      <form onSubmit={handleSignUp}>
        <Input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          placeholder="email"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          placeholder="senha"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          placeholder="nome"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="text"
          value={formData.image}
          onChange={handleInputChange}
          name="image"
          placeholder="foto"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Button type="submit" desabilitar={isLoading.disabled}>
        {isLoading.placeholder}
        </Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  </Centralizador>
);

}

export default SignUp;

