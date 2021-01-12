import React from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

import headerLogo from '../../assets/header-logo.png';
import './styles.css';

interface head {
  headTitle?: string;
}

const PageHearder: React.FC<head> = ({ headTitle }) => {

  const topLogo = headerLogo;

  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hide");
  }

  return (
    <div className="page-header">
      <div className="header-logo">
        <img src={topLogo} alt="Logomarca"/>
        <button onClick={ toggleMenu }><HiMenuAlt3 /></button>
      </div>
      <div className="header-page">
        <p><strong>{headTitle ? headTitle : ""}</strong>  /  ZEstágio</p>
      </div>
    </div>
  );
}

export default  PageHearder;