import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function SubMenuContainer({ name }) {
  return (
    <div className="subMenuContainer">
      <h3>{name}</h3>
      <div className="viewAll">
        <p>Ver Todos</p>
        <i>{<ChevronRightRoundedIcon />}</i>
      </div>
    </div>
  );
}

export default SubMenuContainer;
