import React, { useState, useEffect } from "react";
import styles from "./PilotInfo.module.css";
import { useParams } from "react-router";
import nave from "../Assets/imgs/nave.jpg";
import Films from "../Components/Films";
import StarshipCards from "../Components/StarshipCards";

const PilotInfo = () => {
  const { id } = useParams();
  const [pilot, setPilot] = useState([]);

  useEffect(() => {
    async function loadPilot() {
      const response = await fetch(`https://swapi.dev/api/people/${id}/
        `);
      const pilotItem = await response.json();
      setPilot(pilotItem);
    }
    loadPilot();
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <div>
          <img src={nave} alt="imagen-nave" className={styles.img} />
        </div>
        <h1>{pilot.name}</h1>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto
          id facere aliquam qui, consequuntur exercitationem reprehenderit sit!
          Nulla suscipit, sunt impedit architecto quidem reprehenderit veritatis
          alias ea excepturi provident!
        </p>
        <section>
          <div>Birth year: {pilot.birth_year}</div>
          <div>Eye color: {pilot.eye_color}</div>
          <div>Height: {pilot.height} cm</div>
          <div>Hair color: {pilot.hair_color}</div>
          <div>Gender: {pilot.gender}</div>
          <div>Mass: {pilot.mass} kg</div>
          <Films starshipFilmUrls={pilot.films}></Films>
          <StarshipCards starshipsUrls={pilot.starships}></StarshipCards>
        </section>
      </div>
    </div>
  );
};
export default PilotInfo;
