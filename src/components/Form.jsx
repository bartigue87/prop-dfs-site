import { createContext, useContext, useState } from "react";
import BasketballPlayers from "../pages/BasketballPlayers";
import { PageContext } from "../App";
import BasketballNavs from "./BasketballNavs";
import FootballPlayers from "../pages/FootballPlayers";
import FootballNavs from "./FootballNavs";
import SportNavbar from "./SportNavbar";
import BaseballNavs from "./BaseballNavs";
import BaseballPlayers from "../pages/BaseballPlayers";
import HockeyNavs from "./HockeyNavs";
import HockeyPlayers from "../pages/HockeyPlayers";

export const categoryContext = createContext();

export default function Form() {
  const [page, setPage] = useContext(PageContext);

  const [formData, setFormData] = useState({
    betslipSize: 0,
    category: "Pass Yards",
    betslipCount: [false, false, false, false, false, false],
    betslipBuild: [],
  });

  function PageDisplay() {
    if (page === 0) {
      return (
        <>
          <FootballNavs />
          <FootballPlayers />
        </>
      );
    } else if (page === 1) {
      return (
        <>
          <BasketballNavs />
          <BasketballPlayers />
        </>
      );
    } else if (page === 2) {
      return (
        <>
          <BaseballNavs />
          <BaseballPlayers />
        </>
      );
    } else if (page === 3) {
      return (
        <>
          <HockeyNavs />
          <HockeyPlayers />
        </>
      );
    }
  }

  return (
    <categoryContext.Provider value={[formData, setFormData]}>
      <SportNavbar />
      <div className="form--container">
        <div className="body--container">{PageDisplay()}</div>
      </div>
    </categoryContext.Provider>
  );
}
