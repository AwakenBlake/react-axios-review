import React from "react";
import Pokemon from "./Components/Pokemon";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokeArr: [],
    };
  }

  componentDidMount() {
    // axios
    //   .get(`https://pokeapi.co/api/v2/pokemon/78`)
    //   .then((res) => {
    //     const tempArr = [...this.state.pokeArr];
    //     tempArr.push(res.data);
    //     this.setState({ pokeArr: [...tempArr] });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.randomPokemon()
  }

  randomPokemon = () => {
    const randomNum = Math.ceil(Math.random() * 250);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => {
        const tempArr = [...this.state.pokeArr];
        tempArr.push(res.data);
        this.setState({ pokeArr: [...tempArr] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //TODO add a function that deletes a pokemon by index

  //# pokemon api url https://pokeapi.co/api/v2/
  render() {
    const mappedPoke = this.state.pokeArr.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} />;
    });

    return (
      <div>
        <button onClick={this.randomPokemon}>Get Random Pokemon</button>
        <div>{mappedPoke}</div>
      </div>
    );
  }
}

export default App;
