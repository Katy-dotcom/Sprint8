import React, { useState, useEffect } from "react";
import StarshipListItem from "../Components/Starship/StarshipListItem";

const StarshipsPage = () => {
  const [starshipsList, setStarshipsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const url = `https://swapi.dev/api/starships/?page=${currentPage}`;

  useEffect(() => {
    loadStarshipsList();
  }, [currentPage]);

  async function loadStarshipsList() {
    const response = await fetch(url);
    const starships = await response.json();
    starships.results.forEach((element) => {
      //añadir nueva propiedad a los objetos - id
      element.id = getId(element.url);
    });
    console.log(starships);

    if (starships.next === null) {
      setLastPage(true);
    }

    setStarshipsList([...starshipsList, ...starships.results]);
  }
  const showMoreItems = () => {
    setCurrentPage((prevValue) => prevValue + 1);

    setStarshipsList(starshipsList);
  };

  const getId = (url) => {
    const numberPattern = /\d+/g;
    let id = Number(url.match(numberPattern));
    return id;
  };

  return (
    <div>
      <div>
        {starshipsList.map((item) => (
          <div key={item.id}>
            <StarshipListItem item={item}></StarshipListItem>
          </div>
        ))}
      </div>
      <div>
        {!lastPage && <button onClick={showMoreItems}>View more</button>}
      </div>
    </div>
  );
};

export default StarshipsPage;
