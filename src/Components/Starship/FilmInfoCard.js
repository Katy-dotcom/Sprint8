import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const FilmInfoCard = ({ film }) => {
  return (
    <div>
      <div>
        <h3>{film.title}</h3>
        <div style={{ color: "white" }}>{film.opening_crawl}</div>
        <section>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release date: {film.release_date}</p>
        </section>
      </div>
    </div>
  );
};
export default FilmInfoCard;
