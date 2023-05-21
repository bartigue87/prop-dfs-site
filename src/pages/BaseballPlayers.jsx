import { useContext, useEffect, useState } from "react";
import Tile from "../components/Tile";
import { strikeouts, pitchingOuts, earnedRuns } from "../data/baseball";
import CategoryNav from "../components/CategoryNav";
import { categoryContext } from "../App";
import BaseballNavs from "../components/BaseballNavs";

export default function BaseballPlayers(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const playerStrikeouts = strikeouts.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Strikeouts"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.strikeout_projections}
        data={[data.id, data.name, data.strikeout_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });
  const playerPitchOuts = pitchingOuts.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"Pitching Outs"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.pitching_outs_projections}
        data={[data.id, data.name, data.pitching_outs_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  const earnedRunsAllowed = earnedRuns.map((data) => {
    return (
      <Tile
        id={data.id}
        key={data.id}
        player={data.name}
        team={data.team}
        category={"ERA"}
        icon={"fa-baseball-ball"}
        iconColor={"#ff3636"}
        projection={data.earned_runs_allowed_projections}
        data={[data.id, data.name, data.earned_runs_allowed_projections]}
        checked={formData.betslipBuild.some(
          (bet) => Number(bet.id) === data.id
        )}
      />
    );
  });

  let players;

  function displayPlayers() {
    if (formData.category === "Strikeouts") {
      players = playerStrikeouts;
    } else if (formData.category === "Pitching Outs") {
      players = playerPitchOuts;
    } else if (formData.category === "ERA") {
      players = earnedRunsAllowed;
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
