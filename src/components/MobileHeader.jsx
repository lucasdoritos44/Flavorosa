import React, { useState, useEffect } from "react";
import "./MobileHeader.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MobileHeader = ({ setMobileMenu }) => {
  const [menuClosed, setMenuClosed] = useState(false);
  
  useEffect(() =>{
    setTimeout(() => {
      if(menuClosed === true){
        setMobileMenu(false)
      }
    }, 750)
  }, [menuClosed])

  const closeMenuHandler = () => {
    setMobileMenu(false)
    setMenuClosed(true)
  }

  return (
    <div className={`mobile__menu-wrapper ${menuClosed ? 'slide__out-animation' : ''}`}>
      <p className="logo__mobile">Flavorosa</p>
      <ul>
        <li onClick={closeMenuHandler}>
          <a href="#home">Home</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#about">About</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#menu">Menu</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#awards">Awards</a>
        </li>
        <li onClick={closeMenuHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <CloseRoundedIcon
        style={{
          color: "var(--color-1)",
          fontSize: "28px",
          position: "absolute",
          top: "4%",
          right: "7%",
        }}
        onClick={() => setMenuClosed(true)}
      />
      <p className="book__table__mobile">Book a Table</p>
    </div>
  );
};

export default MobileHeader;
