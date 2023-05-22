import { useContext, useEffect, useState } from "react";
import { categoryContext } from "../App";
import "./component-styles/BetslipBuilder.css";

export default function BetslipBuilder() {
  const [formData, setFormData] = useContext(categoryContext);
  const [multiplyer, setMultiplyer] = useState(0);
  const [amount, setAmount] = useState("");
  const [validation, setValidation] = useState("");
  const [buttonState, setButtonState] = useState(true);

  function displayBetslipBuilder() {
    if (formData.betslipSize === 0) {
      return <div></div>;
    } else {
      const betslip = formData.betslipBuild.map((bet) => {
        return (
          <div className="bet--tile">
            <div>
              <h3>{bet.name}</h3>
              <h4>{bet.projection}</h4>
            </div>
            <div className="bet--input--container">
              <input
                type="radio"
                name="sport"
                id="over"
                value="over"
                className="bet--input bet--over"
                // checked={sportMaj === "hockey"}
                // onChange={handleRadio}
              />
              <input
                type="radio"
                name="sport"
                id="under"
                value="under"
                className="bet--input bet--under"
                // checked={sportMaj === "hockey"}
                // onChange={handleRadio}
              />
            </div>
          </div>
        );
      });
      return betslip;
    }
  }

  useEffect(() => {
    if (formData.betslipSize === 2) {
      setMultiplyer(3);
    } else if (formData.betslipSize === 3) {
      setMultiplyer(5);
    } else if (formData.betslipSize === 4) {
      setMultiplyer(10);
    } else if (formData.betslipSize === 5) {
      setMultiplyer(20);
    } else if (formData.betslipSize === 6) {
      setMultiplyer(50);
    }
  }, [formData.betslipSize]);

  useEffect(() => {
    validator();
  }, [amount]);

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const display =
    formData.betslipSize === 0
      ? {
          display: "none",
        }
      : {
          display: "flex",
        };

  const validator = () => {
    if (amount > 500) {
      setValidation("Maximum amount allowed is $500");
      setButtonState(true);
    } else if (amount < 5 || amount === "") {
      setValidation("Minimum amount required is $5");
      setButtonState(true);
    } else {
      setValidation("");
      setButtonState(false);
    }
  };

  const playerOrPlayers = formData.betslipSize === 1 ? "Player" : "Players";

  console.log(formData.betslipSize);

  return (
    <div className="betslip--builder--container">
      <div className="betslip--container" style={display}>
        <h3>
          Current Entry {`${formData.betslipSize} ${playerOrPlayers} Selected`}
        </h3>
        {displayBetslipBuilder()}
      </div>
      {formData.betslipSize !== 0 && (
        <div className="submit--section">
          <input
            type="number"
            placeholder="0"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountInput}
          />
          {formData.betslipSize < 2 ? (
            <p>Minimum required selections is 2</p>
          ) : (
            <p>Current multiplyer is {multiplyer}x.</p>
          )}
          {amount > 0 && amount <= 500 && (
            <p>
              Betting ${amount} to win ${amount * multiplyer}
            </p>
          )}
          <p>{validation}</p>
          <button disabled={buttonState} className="submit--btn">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
