import { useContext, useEffect, useState } from "react";
import { categoryContext } from "../App";

export default function BetslipSelector(props) {
  const [formData, setFormData] = useContext(categoryContext);

  function handleRadio(event) {
    const playerProp = {
      id: props.id,
      name: props.name,
      projection: props.projection,
      selection: event.target.value,
    };
    if (props.entry.some((data) => data.id === event.target.id)) {
      const index = props.entry.findIndex((obj) => obj.id === event.target.id);
      props.setEntry([
        ...props.entry.slice(0, index),
        ...props.entry.slice(index + 1),
        playerProp,
      ]);
    } else {
      props.setEntry([...props.entry, playerProp]);
    }
  }

  function handleDeselection() {
    if (props.entry.length > formData.betslipSize) {
      for (let i = 0; i < formData.betslipSize; i++) {
        const index = props.entry.findIndex(
          (obj) => obj.id !== formData.betslipBuild[i].id
        );
        props.setEntry([
          ...props.entry.slice(0, index),
          ...props.entry.slice(index + 1),
        ]);
      }
    }
  }

  useEffect(() => {
    handleDeselection();
  }, [formData.betslipSize]);

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
