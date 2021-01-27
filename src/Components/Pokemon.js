import React from "react";

const Pokemon = (props) => {
    const {sprites, name} = props.pokemon
  return <div>
      <h1>{name}</h1>
      <img src={sprites.back_default}/>
      <img src={sprites.front_default}/>
  </div>;
};

export default Pokemon;
