import { useState } from "react";

export default function BetslipBuilder() {
  const [betslipSize, setBetslipSize] = useState(0);

  function displayBetslipBuilder() {
    if (betslipSize === 0) {
      return;
    } else if (betslipSize === 1) {
      return <div></div>;
    }
  }

  return <div className="Betslip--container"></div>;
}
