import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import { goalies, skillsPlayers } from "../data/hockey";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function HockeyPlayers(props) {
  const [category, setCategory] = useContext(categoryContext);

  const saves = goalies.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Saves"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.saves_projections}
      />
    );
  });
  const goalsAllowed = goalies.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Goals Allowed"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.goals_allowed_projections}
      />
    );
  });

  const shotsOnGoal = skillsPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Shots On Goal"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.shots_on_goal_projections}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (category === "Saves") {
      players = saves;
    } else if (category === "Goals Allowed") {
      players = goalsAllowed;
    } else if (category === "Shots On Goal") {
      players = shotsOnGoal;
    } else {
      players = saves;
    }
    return players;
  }

  return (
    <>
      <section>{displayPlayers()}</section>
    </>
  );
}
