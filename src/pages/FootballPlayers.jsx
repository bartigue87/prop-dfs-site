import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import { quarterBacks, wideReceivers, runningBacks } from "../data/football";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function FootballPlayers(props) {
  const [category, setCategory] = useContext(categoryContext);

  const passYards = quarterBacks.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Passing Yards"}
        projection={data.pass_yards_projections}
      />
    );
  });
  const passTds = quarterBacks.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Passing TDs"}
        projection={data.pass_td_projections}
      />
    );
  });

  const receptions = wideReceivers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Receptions"}
        projection={data.receptions_projections}
      />
    );
  });
  const targets = wideReceivers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Targets"}
        projection={data.target_projections}
      />
    );
  });
  const recYards = wideReceivers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Rec Yards"}
        projection={data.receiving_yard_projections}
      />
    );
  });
  const rushYards = runningBacks.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Rush Yards"}
        projection={data.rushing_yards_projections}
      />
    );
  });
  const rushAtt = runningBacks.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Rush Attempts"}
        projection={data.rushing_attempts_projections}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (category === "Passing Yards") {
      players = passYards;
    } else if (category === "Pass TDs") {
      players = passTds;
    } else if (category === "Receptions") {
      players = receptions;
    } else if (category === "Rec Yards") {
      players = recYards;
    } else if (category === "Targets") {
      players = targets;
    } else if (category === "Rush Yards") {
      players = rushYards;
    } else if (category === "Rush Attempts") {
      players = rushAtt;
    } else {
      players = passYards;
    }
    return players;
  }

  return (
    <>
      <section>{displayPlayers()}</section>
    </>
  );
}
