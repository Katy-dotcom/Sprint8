import React from "react";

const PilotInfoCard = ({ pilot }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h3>{pilot.name}</h3>

        <section>
          <div>Birth year: {pilot.birth_year}</div>
          <div>Eye color: {pilot.eye_color}</div>
          <div>Height: {pilot.height} cm</div>
          <div>Hair color: {pilot.hair_color}</div>
          <div>Gender: {pilot.gender}</div>
          <div>Mass: {pilot.mass} kg</div>
        </section>
      </div>
    </div>
  );
};
export default PilotInfoCard;
