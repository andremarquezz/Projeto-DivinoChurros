import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

function ItemCard({ imgSrc, name, ratings, price }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="itemCard">
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
              <i key={i} className="rating orange">
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
