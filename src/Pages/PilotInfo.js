import React, { useState, useEffect } from "react";
import styles from "./PilotInfo.module.css";
import { useParams } from "react-router";
import nave from "../Assets/imgs/nave.jpg";

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
        <h3>{pilot.name}</h3>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto
          id facere aliquam qui, consequuntur exercitationem reprehenderit sit!
          Nulla suscipit, sunt impedit architecto quidem reprehenderit veritatis
          alias ea excepturi provident!
        </p>
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
export default PilotInfo;
