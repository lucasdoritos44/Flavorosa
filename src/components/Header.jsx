import React, {useState} from "react";
import "./Header.css";
import MobileHeader from './MobileHeader'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import useMediaQuery from "@mui/material/useMediaQuery";


const Header = ({setMobileMenu}) => {


  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <div className="header">
      <p className="logo">Flavorosa</p>
      {!isMobile ? <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> : <MenuRoundedIcon style={{color: 'var(--color-1)', fontSize:'28px'}} onClick={() => setMobileMenu(true)}/>}
      {!isMobile && <p className="book__table">Book a Table</p>}
    </div>
  );
};

export default Header;
