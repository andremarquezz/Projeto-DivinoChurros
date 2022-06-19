import React from 'react';
import { Items } from './Data';
import ItemCard from './ItemCard';

function GourmetFlavors() {
  const { gourmet } = Items;

  return (
    <div className="dishItemContainer">
      {gourmet.map((e) => (
        <ItemCard
          key={e.id}
          id={e.id}
          imgSrc={e.imgSrc}
          name={e.name}
          ratings={e.ratings}
          price={e.price}
        />
      ))}
    </div>
  );
}

export default GourmetFlavors;
