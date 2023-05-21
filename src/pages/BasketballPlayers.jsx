import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import { points, rebounds, assists } from "../data/basketball";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function BasketballPlayers(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const playerPoints = points.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Points"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.point_projections}
        data={[data.id, data.name, data.point_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  const playerRebounds = rebounds.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Rebounds"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.rebound_projections}
        data={[data.id, data.name, data.rebound_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  const playerAssists = assists.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Assists"}
        icon={"fa-basketball-ball"}
        iconColor={"#ee6730"}
        projection={data.assist_projections}
        data={[data.id, data.name, data.assist_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (formData.category === "Points") {
      players = playerPoints;
    } else if (formData.category === "Rebounds") {
      players = playerRebounds;
    } else if (formData.category === "Assists") {
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
