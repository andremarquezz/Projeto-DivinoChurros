import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuContainer({ link, icon }) {
  return (
    <li>
      <NavLink to={link}>
        <span className="icon">{icon}</span>
        <div className="indicator"></div>
      </NavLink>
    </li>
  );
}

export default MenuContainer;
