import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

function ItemCard({ imgSrc, name, ratings, price, id }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

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
          <i className="addtoCart">
            <AddShoppingCartRoundedIcon />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
