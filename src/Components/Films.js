import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilmInfoCard from "./Starship/FilmInfoCard";
import styles from "./Films.module.css";

const Films = ({ starshipFilmUrls }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (starshipFilmUrls) {
      starshipFilmUrls.map((url) => {
        const getFilms = async () => {
          const response = await fetch(url);
          const filmProfile = await response.json();
          console.log(filmProfile.title);
          filmProfile.id = getId(url);
          console.log(filmProfile);

          setFilms((prev) => [...prev, filmProfile]);
        };
        getFilms();
      });
    }
  }, [starshipFilmUrls]);

  const getId = (url) => {
    const numberPattern = /\d+/g;
    let id = Number(url.match(numberPattern));
    return id;
  };

  return (
    <div className={styles.section_div}>
      Films:
      {films.length > 0 ? (
        films.map((film) => (
          <Link to={`/Film/${film.id}`} key={film.id}>
            {/* <br />
            {` ${film.title} `} <br /> */}
            <FilmInfoCard film={film} />
          </Link>
        ))
      ) : (
        <span>No hay peliculas. </span>
      )}
    </div>
  );
};

export default Films;
