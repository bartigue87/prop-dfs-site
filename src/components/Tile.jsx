import "./component-styles/Tile.css";

export default function Tile(props) {
  return (
    <div className="tile">
      <input type="checkbox" name="player" id={props.player} />
      <label htmlFor={props.player}>
        <i
          className={`fas ${props.icon}`}
          style={{ color: props.iconColor }}
        ></i>
        <h6>{props.player}</h6>
        <h5>{props.team}</h5>
        <div className="projection">
          <p>{props.projection}</p> | <p>{props.category}</p>
        </div>
      </label>
    </div>
  );
}
