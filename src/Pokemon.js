import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
    };
  }

  async componentDidMount() {
    const response = await axios.get(this.props.pokemon.url);

    this.setState({
      pokemon: response.data,
    });
  }

  render() {
    console.log(this.state.pokemon);

    if (!this.state.pokemon) {
      return (
        <div className="App">
          <h1>{this.props.pokemon.name}</h1>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>{this.props.pokemon.name}</h1>
        <img src={this.state.pokemon.sprites.front_default} />
      </div>
    );
  }
}

export default Pokemon;
