import React from "react";
import { Link } from "react-router-dom";

import styles from "./StarshipListItem.module.css";

const StarshipListItem = ({ item }) => {
  return (
    <Link to={`/Starships/${item.id}`}>
      <div className={styles.list_item}>
        <h4>{item.name.toUpperCase()}</h4> <p> {item.model}</p>
      </div>
    </Link>
  );
};

export default StarshipListItem;
