import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

function Header() {
  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/divino-churros.appspot.com/o/logo-churros.jpg?alt=media&token=c00a6666-0768-4976-b499-ee0dfac9e71d"
        alt="Imagem de Churros"
        className="logo"
      />

      <div className="inputBox">
        <SearchRoundedIcon className="searchIcon" />
        <input type="text" placeholder="Pesquisa" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRoundedIcon className="cart" />
      </div>
      <div className="cart_content">
        <p>2</p>
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
