import React from "react";
import "./Menu.css";
import MenuItem from "../components/MenuItem";

import { drinks, dishes } from "../data";
import coctails from '../assets/coctails.png'

const Menu = () => {
  console.log(drinks);

  return (
    <section className="menu" id="menu">
      <div className="menu__content-dishes">
        <div className="menu__content-1">
          <div className="menu__title">
            <p>Menu That Fits Your Palette</p>
            <h1>Today's Special</h1>
          </div>
          <div className="menu__dishes">
            <h2>Dishes</h2>
            {dishes.map((dish) => (
              <MenuItem key={dish.id} name={dish.name} price={dish.price} />
            ))}
          </div>
        </div>
      </div>
      <div className="menu__content-drinks">
        <div className="menu__content-3">
          <div className="menu__drinks">
            <h2>Drinks & Cocktails</h2>
            {drinks.map((drink) => (
              <MenuItem key={drink.id} name={drink.name} price={drink.price} />
            ))}
          </div>
        </div>
        <div className="coctails__png">
        <img src={coctails} alt='' className="coctails__img"/>
        </div>
        
      </div>
    </section>
  );
};

export default Menu;
