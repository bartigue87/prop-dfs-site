import { useContext, useState } from "react";
import { categoryContext } from "../App";
import "./component-styles/BetslipBuilder.css";

export default function BetslipBuilder() {
  const [formData, setFormData] = useContext(categoryContext);

  function displayBetslipBuilder() {
    if (formData.betslipSize === 0) {
      return <div></div>;
    } else {
      const betslip = formData.betslipBuild.map((bet) => {
        return (
          <div className="tile">
            <h3>{bet.name}</h3>
            <h4>{bet.projection}</h4>
            <div>
              <input
                type="radio"
                name="sport"
                id="over"
                value="over"
                // checked={sportMaj === "hockey"}
                // onChange={handleRadio}
              />
              <label htmlFor="over">Over</label>
              <input
                type="radio"
                name="sport"
                id="under"
                value="under"
                // checked={sportMaj === "hockey"}
                // onChange={handleRadio}
              />
              <label htmlFor="under">Under</label>
            </div>
          </div>
        );
      });
      return betslip;
    }
  }

  const display =
    formData.betslipSize === 0
      ? {
          display: "none",
        }
      : {
          display: "flex",
        };

  return (
    <div className="betslip--container" style={display}>
      {displayBetslipBuilder()}
    </div>
  );
}
