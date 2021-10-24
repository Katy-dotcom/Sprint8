import React from "react";

const StarshipCard = ({ starship }) => {
  console.log(starship);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h3>{starship.name}</h3>

        <section>
          <div>Model: {starship.model}</div>
          <div>Manufacturer: {starship.manufacturer}</div>
          <div>Length: {starship.length} cm</div>
          <div>Passengers: {starship.passengers}</div>
          <div>Cost in credits: {starship.cost_in_credits}</div>
        </section>
      </div>
    </div>
  );
};
export default StarshipCard;
