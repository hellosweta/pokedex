import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = ( props ) => {
  return (

    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
        {props.pokemon.name}
        <img width = '100px' height = '100px' src={props.pokemon.image_url}/>
      </Link>
    </li>);

};
