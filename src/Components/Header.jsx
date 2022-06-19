import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { imageChurrosHeader } from './Data';

function Header() {
  return (
    <header>
      <img src={imageChurrosHeader} alt="Imagem de Churros" className="logo" />

      <div className="inputBox">
        <SearchRoundedIcon className="searchIcon" />
        <input type="text" placeholder="Pesquisa" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRoundedIcon className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src="" alt="" />
        </div>
        <h2 className="userName">Jey</h2>
      </div>
      <div className="toggleMenu">
        <MenuTwoToneIcon className="toogleIcon" />
      </div>
    </header>
  );
}

export default Header;
