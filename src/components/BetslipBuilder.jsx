import { useContext, useEffect, useState } from "react";
import { categoryContext } from "../App";
import Modal from "./Modal";
import "./component-styles/BetslipBuilder.css";
import BetslipSelector from "./BetslipSelector";

export default function BetslipBuilder() {
  const [entry, setEntry] = useState([]);
  const [formData, setFormData] = useContext(categoryContext);
  const [multiplyer, setMultiplyer] = useState(0);
  const [amount, setAmount] = useState("5");
  const [validation, setValidation] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [modalStyle, setModalStyle] = useState({ display: "none" });
  const [display, setDisplay] = useState({ display: "none" });
  const [buttonDisplay, setButtonDisplay] = useState({ display: "none" });

  function displayBetslipBuilder() {
    if (formData.betslipSize === 0) {
      return <div></div>;
    } else {
      const betslip = formData.betslipBuild.map((bet) => {
        return (
          <div className="bet--tile">
            <BetslipSelector
              id={bet.id}
              name={bet.name}
              projection={bet.projection}
              entry={entry}
              setEntry={setEntry}
            />
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
  }, [amount, entry.length, formData.betslipSize]);

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    if (formData.betslipSize === 0) {
      setDisplay({ display: "none" });
      setButtonDisplay({ display: "none" });
    } else if (window.innerWidth < 676) {
      setButtonDisplay({ display: "block" });
    } else {
      setDisplay({ display: "flex" });
    }
  }, [formData.betslipSize]);

  const validator = () => {
    if (amount > 500) {
      setValidation("Maximum amount allowed is $500");
      setButtonState(true);
    } else if (amount < 5 || amount === "") {
      setValidation("Minimum amount required is $5");
      setButtonState(true);
    } else if (
      entry.length !== formData.betslipSize ||
      formData.betslipSize === 0
    ) {
      setValidation("Must select over or under for each pick");
      setButtonState(true);
    } else {
      setValidation("");
      setButtonState(false);
    }
  };

  const clearForm = () => {
    setFormData({
      betslipSize: 0,
      category: "Pass Yards",
      betslipBuild: [],
      myEntries: [
        ...formData.myEntries,
        [...entry, amount, amount * multiplyer],
      ],
    });
    setModalStyle({ display: "flex" });
  };

  const closeMobileBetslip = () => {
    setDisplay({ display: "none" });
  };

  const showSelections = () => {
    setDisplay({ display: "flex" });
  };

  const playerOrPlayers = formData.betslipSize === 1 ? "Player" : "Players";

  return (
    <>
      <Modal modalStyle={modalStyle} setModalStyle={setModalStyle} />
      <div className="betslip--builder--container" style={display}>
        <div className="betslip--container" style={display}>
          <h3>
            Current Entry{" "}
            {`${formData.betslipSize} ${playerOrPlayers} Selected`}
          </h3>
          {displayBetslipBuilder()}
        </div>
        {formData.betslipSize !== 0 && (
          <div className="submit--section">
            <input
              className="amount--input"
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
            <p style={{ color: "red" }}>{validation}</p>
            <button
              disabled={buttonState}
              className="submit--btn"
              onClick={clearForm}
            >
              Submit
            </button>
            <button onClick={closeMobileBetslip} className="submit--btn">
              Return to Board
            </button>
          </div>
        )}
      </div>
      <button
        className="submit--btn mobile--btn"
        style={buttonDisplay}
        onClick={showSelections}
      >
        Show Betslip
      </button>
    </>
  );
}
