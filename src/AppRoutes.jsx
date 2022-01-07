import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

import Hoje from "./pages/Hoje/Hoje";

import { AuthProvider, AuthContext } from './contexts/auth';



const AppRoutes = () => {

  const Private = ( {children} ) => {
    const { authenticated,loading } = useContext(AuthContext)

    if(loading) {
      return <h1>Carregando...</h1>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;

  }

  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  return (
  <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage setToken={setToken} setUser={setUser}/>} />
        <Route exact path="/cadastro" element={ <SignUp /> } />
        <Route exact path="/hoje" element={ <Hoje token={token} user={user} /> } />
      </Routes>
      <GlobalStyle />
    </AuthProvider>
  </Router>
  );
}

export default AppRoutes;