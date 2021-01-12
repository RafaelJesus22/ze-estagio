import React from 'react';
import { Link } from 'react-router-dom'

import { FaUser } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";

import PageHeader from '../../Components/PageHeader';
import PageMenu from '../../Components/PageMenu';

import logo from '../../assets/ze-logo.png';

import './styles.css';


function Dashboard() {
  return (
    <>
    <PageHeader headTitle="Dashboard" />
    <main>
      <PageMenu page="dashboard" />

      <div className="dashboard-content">
        <div className="hi-ze">
          <div className="left">
            <p>Olá! Eu sou <strong>Zé!</strong></p>
            <p>Aqui ficam reunidas as informações sobre o processo seletivo.</p>
            <p>Para conferir ou alterar seus dados cadastrais acesse a página “Minha conta” e caso não consiga encontrar alguma informação você pode solicitar <Link to="/help">aqui</Link>.</p>
            <Link to="/account"><button> <span><FaUser /></span> Minha conta</button></Link>
          </div>

          <div className="right">
            <img src={logo} alt="Logomarca"/>
          </div>

        </div>

        <ul className="fases">

          <li>
            <div className="top">
              <h1>1.</h1>
              <span><GrCloudComputer /></span>
            </div>
            <div className="bottom">
              <h2>Incrição</h2>
              <h4>Completo</h4>
            </div>
          </li>

          <li>
            <div className="top">
              <h1>2.</h1>
              <span><GrCloudComputer /></span>
            </div>
            <div className="bottom">
              <h2>Jeito Zé de Ser</h2>
              <h4>Completo</h4>
            </div>
          </li>

          <li>
            <div className="top">
              <h1>3.</h1>
              <span><GrCloudComputer /></span>
            </div>
            <div className="bottom">
              <h2>Desafio</h2>
            </div>
          </li>

          <li>
            <div className="top">
              <h1>4.</h1>
              <span><GrCloudComputer /></span>
            </div>
            <div className="bottom">
              <h2>Case de Negócio</h2>
            </div>
          </li>

          <li>
            <div className="top">
              <h1>5.</h1>
              <span><GrCloudComputer /></span>
            </div>
            <div className="bottom">
              <h2>Definição dos Aprovados</h2>
            </div>
          </li>

        </ul>

      </div>
    </main>
      
    </>
  );
}

export default Dashboard;