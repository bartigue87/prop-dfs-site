import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import {
  passYards,
  passingTDs,
  recYards,
  receptions,
  targets,
  rushingAttempts,
  rushingYards,
} from "../data/football";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../App";

export default function FootballPlayers(props) {
  const [formData, setFormData] = useContext(categoryContext);
  const passingYards = passYards.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Passing Yards"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.pass_yards_projections}
        data={[data.id, data.name, data.pass_yards_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const passTds = passingTDs.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Passing TDs"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.pass_td_projections}
        data={[data.id, data.name, data.pass_td_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  const recs = receptions.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Receptions"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.receptions_projections}
        data={[data.id, data.name, data.receptions_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const targs = targets.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Targets"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.target_projections}
        data={[data.id, data.name, data.target_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const receiveYards = recYards.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Rec Yards"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.receiving_yard_projections}
        data={[data.id, data.name, data.receiving_yard_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const rushYards = rushingYards.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Rush Yards"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.rushing_yards_projections}
        data={[data.id, data.name, data.rushing_yards_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const rushAtt = rushingAttempts.map((data) => {
    return (
      <Tile
        key={data.id}
        id={data.id}
        player={data.name}
        team={data.team}
        category={"Rush Attempts"}
        icon={"fa-football-ball"}
        iconColor={"#825736"}
        projection={data.rushing_attempts_projections}
        data={[data.id, data.name, data.rushing_attempts_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (formData.category === "Passing Yards") {
      players = passingYards;
    } else if (formData.category === "Pass TDs") {
      players = passTds;
    } else if (formData.category === "Receptions") {
      players = recs;
    } else if (formData.category === "Rec Yards") {
      players = receiveYards;
    } else if (formData.category === "Targets") {
      players = targs;
    } else if (formData.category === "Rush Yards") {
      players = rushYards;
    } else if (formData.category === "Rush Attempts") {
      players = rushAtt;
    } else {
      players = passingYards;
    }
    return players;
  }

  return (
    <>
      <section>{displayPlayers()}</section>
    </>
  );
}
