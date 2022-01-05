import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from "./PaginaLogin";
import PaginaCadastro from "./PaginaCadastro/PaginaCadastro";
import Hoje from "./Hoje/Hoje";
import GlobalStyle from ".././styles/GlobalStyle";


export default function App(){
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLogin setToken={setToken} setUser={setUser}/>} />
        <Route path="/hoje" element={<Hoje token={token} user={user} />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
      </Routes>
      <GlobalStyle />
  </BrowserRouter>
  );
}

