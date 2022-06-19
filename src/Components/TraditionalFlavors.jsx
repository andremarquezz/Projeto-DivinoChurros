import React from 'react';
import { Items } from './Data';
import ItemCard from './ItemCard';

function TraditionalFlavors() {
  const { tradicional } = Items;

  return (
    <div className="dishItemContainer">
      {tradicional.map((e) => (
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

export default TraditionalFlavors;
