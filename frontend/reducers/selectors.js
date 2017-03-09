import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const { pokemon } = state;
  return Object.values(pokemon);
};
