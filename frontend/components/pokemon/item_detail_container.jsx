import React from 'react';
import { ItemDetail } from './item_detail';
import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItem } from  '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
