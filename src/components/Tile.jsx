import { useContext } from "react";
import "./component-styles/Tile.css";
import { categoryContext } from "../App";

export default function Tile(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const handleCheckbox = (event) => {
    const playerPropDataSplit = event.target.value.split(",");
    const playerProp = {
      id: playerPropDataSplit[0],
      name: playerPropDataSplit[1],
      projection: `${playerPropDataSplit[2]} ${props.category}`,
    };
    if (formData.betslipBuild.some((data) => data.id === event.target.id)) {
      const index = formData.betslipBuild.findIndex(
        (obj) => obj.id === event.target.id
      );
      setFormData({
        ...formData,
        betslipBuild: [
          ...formData.betslipBuild.slice(0, index),
          ...formData.betslipBuild.slice(index + 1),
        ],
        betslipSize: (formData.betslipSize -= 1),
      });
    } else if (formData.betslipSize === 6) {
      alert("6 is the maximum amount of selections allowed.");
    } else {
      setFormData({
        ...formData,
        betslipBuild: [...formData.betslipBuild, playerProp],
        betslipSize: (formData.betslipSize += 1),
      });
    }
  };

  return (
    <div className="tile">
      <input
        type="checkbox"
        id={props.id}
        name="player"
        onChange={handleCheckbox}
        checked={props.checked}
        value={props.data}
      />
      <label className="tile--label" htmlFor={props.id}>
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
