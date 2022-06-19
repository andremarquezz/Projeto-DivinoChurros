import React, { useEffect, useState } from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

let cartItems = [];

function CartItem({ name, imgSrc, price, id, total}) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty, cart, price]);

  const updateQuantity = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
    }
    if (action === 'remove') {
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }
      setQty(qty - 1);
    }
  };

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
            <RemoveShoppingCartRoundedIcon
              className="itemRemove"
              onClick={() => updateQuantity('remove', id)}
            />
            <AddShoppingCartRoundedIcon
              className="itemAdd"
              onClick={() => updateQuantity('add', id)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">R$ </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
