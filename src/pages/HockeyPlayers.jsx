import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import { goalieSaves, allowedGoals, skillsPlayers } from "../data/hockey";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function HockeyPlayers(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const saves = goalieSaves.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Saves"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.saves_projections}
        data={[data.id, data.name, data.saves_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const goalsAllowed = allowedGoals.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Goals Allowed"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.goals_allowed_projections}
        data={[data.id, data.name, data.goals_allowed_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  const shotsOnGoal = skillsPlayers.map((data) => {
    return (
      <Tile
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Shots On Goal"}
        icon={"fa-hockey-puck"}
        iconColor={"black"}
        projection={data.shots_on_goal_projections}
        data={[data.id, data.name, data.shots_on_goal_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (formData.category === "Saves") {
      players = saves;
    } else if (formData.category === "Goals Allowed") {
      players = goalsAllowed;
    } else if (formData.category === "Shots On Goal") {
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
