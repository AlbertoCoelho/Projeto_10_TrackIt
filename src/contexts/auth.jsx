import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';

import { api, createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem("token")

    /*
    if(recoveredUser && token){
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    */

    setLoading(false);
  }, [])
  
  /*Essa é a função que vai receber do login essas duas informações abaixo como parâmetro */
  const login = async (email,password) => {
    const response = await createSession(email,password)
    
    console.log("login", response.data);

    //Uma vez tendo a informação de email e password eu deveria ir numa API e criar uma section. Depois essa API vai retornar um usuário que terá o nosso id e o nosso email. Por enquanto vamos simular isso depois colocar a API.

    /* Isso seria a resposta da minha section */
    const loggedUser = response.data.user; // É como está na API dele.
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/hoje");
    
  }

  const logout = () => {
    console.log("logout"); 

    localStorage.remove("user");
    localStorage.remove("token");      
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value= { {authenticated: !!user, user, loading, login, logout } }>
      {children}
    </AuthContext.Provider>
  );
} 