import React, { useEffect, useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Items } from './Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartData = [];

function ItemCard({ imgSrc, name, ratings, price, id }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setIsFavourite] = useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart, dispatch]);

  const searchProduct = (id) => {
    const { gourmet, tradicional } = Items;
    const resultGourmet = gourmet.find((e) => e.id === id);
    const resultTraditional = tradicional.find((e) => e.id === id);
    resultGourmet !== undefined ? setCart(resultGourmet) : setCart(resultTraditional);
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={id}>
      <div
        className={`isFavourite ${isFavourite && 'active'}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <FavoriteRoundedIcon />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="Imagem do Produto" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((star, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? 'orange' : 'gray'}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRoundedIcon />
              </i>
            ))}
            <h3 className="price">
              <span>R$ </span>
              {price}
            </h3>
          </div>
          <i className="addtoCart" onClick={() => searchProduct(id)}>
            <AddShoppingCartRoundedIcon />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
