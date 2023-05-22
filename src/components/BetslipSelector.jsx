import { useContext, useState } from "react";
import { categoryContext } from "../App";

export default function BetslipSelector(props) {
  const [formData, setFormData] = useContext(categoryContext);

  function handleRadio(event) {
    console.log(event.target.value);
    const playerProp = {
      id: props.id,
      name: props.name,
      projection: props.projection,
      selection: event.target.value,
    };
    console.log("playerProp.selection:", playerProp.selection);
    props.setEntry([...props.entry, playerProp]);
  }
  console.log("entry", props.entry);
  return (
    <>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.projection}</h4>
      </div>
      <div className="bet--input--container">
        <input
          type="radio"
          name={`overUnder${props.id}`}
          id={props.id}
          value="over"
          className="bet--input bet--over"
          // checked={sportMaj === "hockey"}
          onChange={handleRadio}
        />
        <input
          type="radio"
          name={`overUnder${props.id}`}
          id={props.id}
          value="under"
          className="bet--input bet--under"
          // checked={sportMaj === "hockey"}
          onChange={handleRadio}
        />
      </div>
    </>
  );
}
