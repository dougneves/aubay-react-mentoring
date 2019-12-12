import React from 'react';
import './App.css';
import Axios from 'axios';

import Pokemon from './Pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      pokemon: null,
    };

    this.openPokemon = this.openPokemon.bind(this);
  }

  async componentDidMount() {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon');

    this.setState({
      list: response.data.results,
    });
  }

  openPokemon(pokemon) {
    this.setState({
      pokemon,
    });
  }

  render() {
    if (this.state.pokemon) {
      return <Pokemon pokemon={this.state.pokemon} />;
    }

    return (
      <div className="App">
        {this.state.list.map(item => {
          return (
            <div key={item.name} onClick={() => this.openPokemon(item)}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
