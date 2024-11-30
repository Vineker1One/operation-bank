import React from "react";
import { Form, Link } from "react-router-dom";
import "./Header.css";
import benzovozlogo from '../../images/benzovoz.png'

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <img
        src = {benzovozlogo}
        alt = "Логотип"
        className="benzovoz_logo"
        ></img>
        <div className="collapse navbar-collapse">
          {isAuthenticated && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/stats">Главная статистика</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/logs">Логи</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/log-check">Проверка отдельного лога</Link>
              </li>
            </ul>
          )}
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={onLogout}>
                  Выйти
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item btn-outline-light login">
                  <Link className="btn btn-outline-light" to="/login">Вход</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light login" to="/register">Регистрация</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
