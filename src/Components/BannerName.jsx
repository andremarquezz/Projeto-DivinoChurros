import React from 'react';
import { Link } from 'react-router-dom';

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Olá {name}</h3>
      <p>
        Compre três churros e ganhe <span>{discount}</span>
      </p>
      <Link to="/">Ver sabores</Link>
    </div>
  );
}

export default BannerName;
