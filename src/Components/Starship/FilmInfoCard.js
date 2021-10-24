import React from "react";

const FilmInfoCard = ({ film }) => {
  return (
    <div style={{ width: "100%" }}>
      <h3>{film.title}</h3>
      <div style={{ width: "100%" }}>{film.opening_crawl}</div>
      <section>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>Release date: {film.release_date}</p>
      </section>
    </div>
  );
};
export default FilmInfoCard;
