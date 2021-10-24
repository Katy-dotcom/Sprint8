import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./StarshipInfo.module.css";
import nave from "../Assets/imgs/nave.jpg";
import Pilots from "../Components/Pilots";
import Films from "../Components/Films";

const StarshipInfo = () => {
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
        <h1>{starship.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto
          id facere aliquam qui, consequuntur exercitationem reprehenderit sit!
          Nulla suscipit, sunt impedit architecto quidem reprehenderit veritatis
          alias ea excepturi provident!
        </p>
        <section>
          <div className={styles.section_div}>Model: {starship.model}</div>
          <div className={styles.section_div}>
            Cost in credits: {starship.cost_in_credits}
          </div>
          <div>Manufacturer: {starship.manufacturer}</div>
          <div>Length: {starship.length}</div>
          <div>Atmoshperic Speed: {starship.max_atmosphering_speed}</div>
          <div>Crew: {starship.crew}</div>
          <Pilots
            className={styles.section_div}
            starshipPilotUrls={starship.pilots}
          ></Pilots>
          <Films
            className={styles.section_div}
            starshipFilmUrls={starship.films}
          ></Films>
        </section>
      </div>
    </div>
  );
};

export default StarshipInfo;
