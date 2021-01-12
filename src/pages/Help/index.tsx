import React from 'react';

import { FaTelegramPlane } from "react-icons/fa";

import PageMenu from '../../Components/PageMenu';
import PageHeader from '../../Components/PageHeader';

import './style.css'

function Help() {
  return (
    <>
    <PageHeader headTitle="Ajuda"/>
    <main>
      <PageMenu page="help" />
      <div className="form-wrapper">
        <div className="form-content">

          <form action="#" id="help">
            <h1>Ajuda</h1>
            <p>Dúvidas, críticas ou sugestões? Envie uma mensagem pelo formulário abaixo e entraremos em contato o mais rápido possível. Obrigado!</p>

            <div className="line">
              <span>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" name="nome" />
              </span>
              
              <span>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" />
              </span>

              <span>
                <label htmlFor="phone">Telefone</label>
                <input type="phone" name="phone" id="phone" />
              </span>                
            </div>
            
            <div className="line">
              <span>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" />
              </span>
            </div>

            <button>
              <span><FaTelegramPlane /></span>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
    </>
  );
}

export default Help;