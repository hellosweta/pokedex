import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, receivePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchPokemon = fetchPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.receivePokemon = receivePokemon;
});
