import React from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';

function CartItem({ name, imgSrc, qty, price }) {
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="Imagem do Produto no Carrinho" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <AddShoppingCartRoundedIcon className="itemAdd" />
            <RemoveShoppingCartRoundedIcon className="itemRemove" />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">R$ </span>
        <span className="itemPriceValue">{Number(qty) * Number(price)}</span>
      </p>
    </div>
  );
}

export default CartItem;
