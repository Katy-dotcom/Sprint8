import React, { useState, useEffect } from "react";
import ActorListItem from "../Components/ActorListItem";
import styles from "./StarshipsPage.module.css";

const ActorsPage = () => {
  const [actorsList, setActorsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const url = `https://swapi.dev/api/people/?page=${currentPage}`;

  useEffect(() => {
    loadActorsList();
  }, [currentPage]);

  async function loadActorsList() {
    const response = await fetch(url);
    const actors = await response.json();
    actors.results.forEach((element) => {
      //añadir nueva propiedad a los objetos - id
      element.id = getId(element.url);
    });
    console.log(actors);

    if (actors.next === null) {
      setLastPage(true);
    }

    setActorsList([...actorsList, ...actors.results]);
  }
  const showMoreItems = () => {
    setCurrentPage((prevValue) => prevValue + 1);

    setActorsList(actorsList);
  };

  const getId = (url) => {
    const numberPattern = /\d+/g;
    let id = Number(url.match(numberPattern));
    return id;
  };

  return (
    <div>
      <div>
        {actorsList.map((item) => (
          <div key={item.id}>
            <ActorListItem item={item}></ActorListItem>
          </div>
        ))}
      </div>
      <div>
        {!lastPage && (
          <button className={styles.button} onClick={showMoreItems}>
            View more
          </button>
        )}
      </div>
    </div>
  );
};

export default ActorsPage;
