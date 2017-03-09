import React from 'react';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokes = this.props.pokemon.map((poke, idx) => (
    <li key={idx}>
      {poke.name}
      <img width = '100px' height = '100px' src={poke.image_url}/>
      </li> ));

    return (
      <div>
        <ul>
          {pokes}
        </ul>
      </div>
    );

  }

}

export default PokemonIndex;
