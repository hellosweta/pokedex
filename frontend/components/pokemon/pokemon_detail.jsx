import React from 'react';
import { Link } from 'react-router';

  class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.requestPokemon(this.props.params.pokemonId);
  }
  componentWillReceiveProps(newProps) {
    if (!(this.props.params.pokemonId === newProps.params.pokemonId)) {
      this.props.requestPokemon(newProps.params.pokemonId);
    }
  }
  render() {

    let moves = [];
    let items = [];
    if (this.props.pokemonDetail.moves) {
      moves = this.props.pokemonDetail.moves.map((move, idx) => (<li key={idx}>{move}</li>));
    }

    if (this.props.pokemonDetail.items) {
      // debugger;
      items = this.props.pokemonDetail.items.map((item,idx) => (
        <span key={idx}>
          <Link to={`/pokemon/${this.props.params.pokemonId}/item/${item.id}`}>
          <img width = '100px' height = '100px' src={item.image_url}/>
          </Link>
        </span>
    ));
    }


    return(
      <ul>
        <li><h2> Name: {this.props.pokemonDetail.name}</h2></li>
        <img width = '300px' height = '300px' src={this.props.pokemonDetail.image_url}/>
        <li>Type: {this.props.pokemonDetail.poke_type}</li>
        <li>Attack: {this.props.pokemonDetail.attack}</li>
        <li>Defense: {this.props.pokemonDetail.defense}</li>
        {moves}
        {items}
        {this.props.children}
      </ul>
    );
  }
}

export default PokemonDetail;
