export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchPokemon = (id) => (

  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
);

export const createPokemon = (formData) => (
  $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: formData,
  })
);
