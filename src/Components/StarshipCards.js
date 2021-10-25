import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarshipCard from "./Starship/StarshipCard";

const StarshipCards = ({ starshipsUrls }) => {
  const [starshipCards, setStarshipCards] = useState([]);
  useEffect(() => {
    if (starshipsUrls) {
      starshipsUrls.map((url) => {
        const getStarships = async () => {
          const response = await fetch(url);
          const starshipProfile = await response.json();
          starshipProfile.id = getId(url);

          setStarshipCards((prev) => [...prev, starshipProfile]);
        };
        getStarships();
      });
    }
  }, [starshipsUrls]);
  const getId = (url) => {
    const numberPattern = /\d+/g;
    let id = Number(url.match(numberPattern));
    return id;
  };
  return (
    <div>
      Starships:
      {starshipCards.length > 0 ? (
        starshipCards.map((starship) => (
          <Link to={`/Starships/${starship.id}`} key={starship.id}>
            <StarshipCard starship={starship}></StarshipCard>
          </Link>
        ))
      ) : (
        <span>No hay starships. </span>
      )}
    </div>
  );
};

export default StarshipCards;
