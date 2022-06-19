import React from 'react';
import ItemCard from './ItemCard';
import { Items } from './Data';

function AllFlavors() {
  const { gourmet, tradicional } = Items;

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

export default AllFlavors;
