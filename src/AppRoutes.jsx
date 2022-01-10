import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from 'react';

import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Today from "./pages/Today";
import Habits from "./pages/Habits";
import Historic from "./pages/Historic";


import { AuthProvider, AuthContext } from './contexts/auth';
import { UserInformationProvider } from './contexts/userInformation';

const AppRoutes = () => {

  const Private = ( {children} ) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <h1>Carregando...</h1>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  }

  return (
  <Router>
    <AuthProvider>
      <UserInformationProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/cadastro" element={ <SignUp /> } />
          <Route exact path="/hoje" element={ <Private> <Today /> </Private> } />
          <Route exact path="/habitos" element={ <Private> <Habits /> </Private>} />
          <Route exact path="/historico" element={<Private> <Historic /> </Private> } />
        </Routes>
        <GlobalStyle />
      </UserInformationProvider>
    </AuthProvider>
  </Router>
  );
}

export default AppRoutes;