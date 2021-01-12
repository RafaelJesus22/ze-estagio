import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoHome } from "react-icons/io5";
import { FaUser, FaQuestion } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import userPhoto from '../../assets/default-user-photo.png';

import './styles.css';

interface activePage {
  page: string;
}

const PageMenu: React.FC<activePage> = ({ page }) => {
  return (
    <div className="menu-container" id="menu" >
      <div className="user-info">
        <img src={userPhoto} alt="user avatar"/>
        <p>
          Rafael Jesus de Moura <br/>
          <span>Candidato</span>
        </p>
      </div>
      
      <div className="menu-items-wrapper">
        <h4>Menu</h4>
        <ul>
        
          <li id="ds" className={ page === "dashboard" ? "active" : "deactive" } >
            <Link to="/dashboard" >
              <div>
                <span> <IoHome/> </span>
                <p style={{textDecoration: 'none'}}>Dashboard</p>
              </div>
            </Link>
          </li>
        
          <li id="ac" className={ page === "account" ? "active" : "deactive" }>
            <Link to="/account" >
              <div>
                <span> <FaUser/> </span>
                <p>Minha conta</p>
              </div>
            </Link>
          </li>
        
          <li  id="hp" className={ page === "help" ? "active" : "deactive" }>
            <Link to="/help" >
              <div>
                <span> <FaQuestion/> </span>
                <p>Ajuda</p>
              </div>
            </Link>
          </li>
        
          <li >
            <Link to="/" >
              <div>
                <span> <FiLogOut/> </span>
                <p>Sair</p>
              </div>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default PageMenu;