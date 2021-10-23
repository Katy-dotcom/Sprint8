import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const PilotInfoCard = ({ pilot }) => {
  return (
    <div>
      <div>
        <h3>{pilot.name}</h3>

        <section>
          <p>Birth year: {pilot.birth_year}</p>
          <p>Eye color: {pilot.eye_color}</p>
          <p>Height: {pilot.height} cm</p>
          <p>Hair color: {pilot.hair_color}</p>
          <p>Gender: {pilot.gender}</p>
          <p>Mass: {pilot.mass} kg</p>
        </section>
      </div>
    </div>
  );
};
export default PilotInfoCard;
