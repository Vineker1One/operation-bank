import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = () => setIsAuthenticated(true); 
  const handleLogout = () => setIsAuthenticated(false); 

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<h1>Добро пожаловать!</h1>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
        <Route path="/stats" element={<h1>Главная статистика</h1>} />
        <Route path="/logs" element={<h1>Логи</h1>} />
        <Route path="/log-check" element={<h1>Проверка отдельного лога</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
