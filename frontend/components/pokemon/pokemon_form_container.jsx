import React from 'react';
import { PokemonForm } from './item_detail';
import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
// import { selectPokemonItem } from  '../../reducers/selectors';


const mapDispatchToProps = dispatch => ({
  createPokemon: (formData) => dispatch(createPokemon(formData))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
