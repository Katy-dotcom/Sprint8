import React, { useState, useEffect } from "react";
import styles from "./FilmInfo.module.css";
import { useParams } from "react-router";
import nave from "../Assets/imgs/nave.jpg";

const FilmInfo = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    async function loadFilm() {
      const response = await fetch(`https://swapi.dev/api/films/${id}/
        `);
      const filmItem = await response.json();
      setFilm(filmItem);
    }
    loadFilm();
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <div>
          <img src={nave} alt="imagen-nave" className={styles.img} />
        </div>
        <h3>{film.title}</h3>
        <p style={{ color: "white" }}>{film.opening_crawl}</p>
        <section>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release date: {film.release_date}</p>
        </section>
      </div>
    </div>
  );
};
export default FilmInfo;
