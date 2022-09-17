import React from 'react'
import './MenuItem.css'

const MenuItem = ({name, price, id}) => {
  return (
    <div className="menu__content-item">
    <p>{name}</p>
    <div className="menu__content-item-price">
      <div className="dash" />
      <p>{price}</p>
    </div>
  </div>
  )
}

export default MenuItem