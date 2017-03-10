import React from 'react';
import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  pokemonDetail: state.pokemonDetail,
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
