import { createContext, useContext, useState } from "react";
import BasketballPlayers from "../pages/BasketballPlayers";
import BasketballNavs from "./BasketballNavs";
import FootballPlayers from "../pages/FootballPlayers";
import FootballNavs from "./FootballNavs";
import SportNavbar from "./SportNavbar";
import BaseballNavs from "./BaseballNavs";
import BaseballPlayers from "../pages/BaseballPlayers";
import HockeyNavs from "./HockeyNavs";
import HockeyPlayers from "../pages/HockeyPlayers";
import BetslipBuilder from "./BetslipBuilder";
import { categoryContext } from "../App";

export const PageContext = createContext();

export default function Form() {
  const [page, setPage] = useState(0);
  const [formData] = useContext(categoryContext);

  function PageDisplay() {
    if (page === 0) {
      return (
        <>
          <FootballPlayers />
        </>
      );
    } else if (page === 1) {
      return (
        <>
          <BasketballPlayers />
        </>
      );
    } else if (page === 2) {
      return (
        <>
          <BaseballPlayers />
        </>
      );
    } else if (page === 3) {
      return (
        <>
          <HockeyPlayers />
        </>
      );
    }
  }

  const grid =
    formData.betslipSize === 0
      ? {
          display: "block",
        }
      : { display: "grid", gridTemplateColumns: "2fr 1fr" };

  return (
    <PageContext.Provider value={[page, setPage]}>
      <SportNavbar />
      <div className="form--container" style={grid}>
        <div className="body--container">{PageDisplay()}</div>
        <BetslipBuilder />
      </div>
    </PageContext.Provider>
  );
}
