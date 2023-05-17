import "./component-styles/Tile.css";

export default function Tile(props) {
  return (
    <div className="tile">
      <input type="checkbox" name="player" id={props.player} />
      <label htmlFor={props.player}>
        <i className="fas fa-basketball-ball" style={{ color: "#f07a19" }}></i>
        <h6>{props.player}</h6>
        <h>{props.team}</h>
        <div className="projection">
          <p>{props.projection}</p> | <p>{props.category}</p>
        </div>
      </label>
    </div>
  );
}
