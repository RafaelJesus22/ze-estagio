import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import zestagioImage from '../../assets/img-login.jpg';
import zeLogo from '../../assets/ze-logo.png';


export default function Login() {

  const imageLogin = zestagioImage;
  const imageLogo = zeLogo;

  return (
    <div className="login-container">

      <div className="form-container">
        <div className="form-login-header">
          <img src={imageLogo}  alt="Logo"/>
          <h2>ZEstágio</h2>
        </div>

        <div className="login-form">

          <h2>LOGIN</h2>

          <div className="form-input">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" required />
          </div>

          <div className="form-input">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" required />
          </div>

          <Link to="/dashboard" ><button>ACESSAR</button></Link>
          <button className="forgot-password" >Esqueceu sua senha?</button>

        </div>
      </div>

      <div className="login-image-container">
        <img src={imageLogin} alt="Programa ZEstágio"/>
      </div>

    </div>
  );
}
