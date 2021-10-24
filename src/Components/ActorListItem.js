import React from "react";
import { Link } from "react-router-dom";

import styles from "./Starship/StarshipListItem.module.css";

const ActorListItem = ({ item }) => {
  return (
    <Link to={`/Actors/${item.id}`}>
      <div className={styles.list_item}>
        <h4>{item.name.toUpperCase()}</h4>
      </div>
    </Link>
  );
};

export default ActorListItem;
