export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = poke => ({
  type: RECEIVE_POKEMON,
  poke
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (id) => (dispatch) => {

  return APIUtil.fetchPokemon(id).then(poke => dispatch(receivePokemon(poke)));
};

export const createPokemon = (formData) => (dispatch) => {
  return APIUtil.createPokemon(formData).then(newPoke => dispatch(receivePokemon(newPoke)));
};
