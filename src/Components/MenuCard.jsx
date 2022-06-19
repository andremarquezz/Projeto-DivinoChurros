import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { NavLink } from 'react-router-dom';

function MenuCard({ imgSrc, name, link }) {
  return (
    <NavLink to={link}>
      <div className="rowMenuCard">
        <div className="imgBox">
          <img src={imgSrc} alt="Imagem de Churros" />
        </div>
        <h3>{name}</h3>
        <i className="loadMenu">{<ChevronRightRoundedIcon />}</i>
      </div>
    </NavLink>
  );
}

export default MenuCard;
