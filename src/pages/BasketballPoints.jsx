import Tile from "../components/Tile";
import basketballPlayers from "../data/basketball";

export default function BasketballPoints() {
  const players = basketballPlayers.map((data) => {
    return (
      <Tile
        key={data.name}
        player={data.name}
        team={data.team}
        category={"Points"}
        projection={data.point_projections}
      />
    );
  });
  return <section>{players}</section>;
}
