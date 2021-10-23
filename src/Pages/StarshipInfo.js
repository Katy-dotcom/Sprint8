import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./StarshipInfo.module.css";
import nave from "../Assets/imgs/nave.jpg";
import Pilots from "../Components/Pilots";
import Films from "../Components/Films";

const StarshipInfo = () => {
  //   console.log(useParams());
  const { id } = useParams();

  const [starship, setStarship] = useState([]);

  useEffect(() => {
    async function loadStarship() {
      const response = await fetch(`https://swapi.dev/api/starships/${id}/
        `);
      const starshipItem = await response.json();
      setStarship(starshipItem);
    }
    loadStarship();
  }, [id]);
  //console.log(starship.pilots[0]);

  return (
    <div className={styles.container}>
      <div>
        <img src={nave} alt="imagen-nave" className={styles.img} />
      </div>
      <div>
        <h2>{starship.name}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto
          id facere aliquam qui, consequuntur exercitationem reprehenderit sit!
          Nulla suscipit, sunt impedit architecto quidem reprehenderit veritatis
          alias ea excepturi provident!
        </p>
        <section>
          <p>Model: {starship.model}</p>
          <p>Cost in credits: {starship.cost_in_credits}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Length: {starship.length}</p>
          <p>Atmoshperic Speed: {starship.max_atmoshpering_speed}</p>
          <p>Crew: {starship.crew}</p>
          <Pilots starshipPilotUrls={starship.pilots}></Pilots>
          <Films starshipFilmUrls={starship.films}></Films>
        </section>
      </div>
    </div>
  );
};

export default StarshipInfo;
