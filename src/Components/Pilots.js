import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PilotInfoCard from "./Starship/PilotInfoCard";

const Pilots = ({ starshipPilotUrls }) => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    if (starshipPilotUrls) {
      starshipPilotUrls.map((url) => {
        const getPilots = async () => {
          const response = await fetch(url);
          const pilotProfile = await response.json();
          console.log(pilotProfile.name);
          pilotProfile.id = getId(url);
          console.log(pilotProfile);

          setPilots((prev) => [...prev, pilotProfile]);
        };
        getPilots();
      });
    }
  }, [starshipPilotUrls]);

  const getId = (url) => {
    const numberPattern = /\d+/g;
    let id = Number(url.match(numberPattern));
    return id;
  };

  return (
    <div>
      Pilotos:
      {pilots.length > 0 ? (
        pilots.map((pilot) => (
          <Link to={`/Actors/${pilot.id}`} key={pilot.id}>
            <PilotInfoCard pilot={pilot} />
          </Link>
        ))
      ) : (
        <span>No hay pilotos registrados</span>
      )}
    </div>
  );
};

export default Pilots;
