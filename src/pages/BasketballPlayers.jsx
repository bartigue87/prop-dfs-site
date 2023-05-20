import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import basketballPlayers from "../data/basketball";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function BasketballPlayers(props) {
  const [category, setCategory] = useContext(categoryContext);

  const playerPoints = basketballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Points"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.point_projections}
      />
    );
  });
  const playerRebounds = basketballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Rebounds"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.rebound_projections}
      />
    );
  });

  const playerAssists = basketballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Assists"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.assist_projections}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (category === "Points") {
      players = playerPoints;
    } else if (category === "Rebounds") {
      players = playerRebounds;
    } else if (category === "Assists") {
      players = playerAssists;
    } else {
      players = playerPoints;
    }
    return players;
  }

  return (
    <>
      <section>{displayPlayers()}</section>
    </>
  );
}
