import React from 'react';

import { BiSave } from "react-icons/bi";

import PageMenu from '../../Components/PageMenu';
import PageHeader from '../../Components/PageHeader';

import './style.css'

function Account() {
  return (
    <>
    <PageHeader headTitle="Minha conta" />

    <main>
      <PageMenu page="account" />
      <div className="form-wrapper">
        <div className="form-content">

          <form action="#" id="personal-data">
            <h1>Dados cadastrais</h1>
            <p>Nessa seção você pode verificar ou alterar caso necessário as suas informações pessoais.</p>

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
                <label htmlFor="nascimento">Data de nascimento</label>
                <input type="date" name="nascimento" id="nascimento" />
              </span>                
            </div>
            
            <div className="line">
              <span>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" />
              </span>

              <span>
                <label htmlFor="celular">Celular</label>
                <input type="text" name="celular" id="celular" />
              </span>  

              <span>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" />
              </span>  
            </div>

            <div className="line">
              <span>  
                <label htmlFor="college">Instituição de ensino</label>
                <input type="text" name="college" id="college" />
              </span>  
              
              <span>  
                <label htmlFor="curso">Curso</label>
                <input type="text" name="curso" id="curso" />
              </span>  
            </div>
            
            <div className="line">
              <span className="half">  
                <label htmlFor="formacao">Mês/Ano de formação</label>
                <input type="text" name="formacao" id="formacao" />
              </span>
            </div>

            <button>
              <span><BiSave /></span>
              Salvar alterações
            </button>
          </form>

          <hr />

          <form action="#" id="change-password">
            <h1>Alterar senha</h1>

            <div className="line">
              <span>
                <label htmlFor="current">Senha atual</label>
                <input type="password" name="current" id="current" />
              </span>  
              
              <span>
                <label htmlFor="new">Nova senha</label>
                <input type="password" name="new" id="new" />
              </span>  
              
              <span>
                <label htmlFor="repeat">Confirmar</label>
                <input type="password" name="repeat" id="repeat" />
              </span>                  
            </div>

            <button>
              <span><BiSave /></span>
              Alterar senha
            </button>
          </form>

        </div>
      </div>
    </main>
    </>
  );
}

export default Account;