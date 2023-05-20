import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import baseballPlayers from "../data/baseball";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../components/Form";

export default function BaseballPlayers(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const strikeouts = baseballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Strikeouts"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.strikeout_projections}
      />
    );
  });
  const pitchingOuts = baseballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Pitching Outs"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.pitching_outs_projections}
      />
    );
  });

  const earnedRuns = baseballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"ERA"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.earned_runs_allowed_projections}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (formData.category === "Strikeouts") {
      players = strikeouts;
    } else if (formData.category === "Pitching Outs") {
      players = pitchingOuts;
    } else if (formData.category === "ERA") {
      players = earnedRuns;
    } else {
      players = strikeouts;
    }
    return players;
  }

  return (
    <>
      <section>{displayPlayers()}</section>
    </>
  );
}
