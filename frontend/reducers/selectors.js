import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const { pokemon } = state;
  return Object.values(pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  const { pokemonDetail } = state;
  let selectedItem = {};
  if (pokemonDetail.items) {
    pokemonDetail.items.map(item => {
      if (item.id.toString() === itemId) {
        selectedItem = item;
      }
    });
  }
  return selectedItem;
};
