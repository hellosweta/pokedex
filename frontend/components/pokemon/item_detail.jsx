import React from 'react';
import { Link } from 'react-router';

export const ItemDetail = ( state ) => {
  const {item} = state;

  return (
      <div>
      <h1>{item.name}</h1>
      <li>Happiness: {item.happiness}</li>
      <li>Price: ${item.price}</li>
        </div>
    );
};
