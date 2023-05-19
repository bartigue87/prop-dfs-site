import { createContext, useContext, useState } from "react";
import BasketballPlayers from "../pages/BasketballPlayers";
import { PageContext } from "../App";
import BasketballNavs from "./BasketballNavs";
import FootballPlayers from "../pages/FootballPlayers";
import FootballNavs from "./FootballNavs";
import SportNavbar from "./SportNavbar";
import BaseballNavs from "./BaseballNavs";
import BaseballPlayers from "../pages/BaseballPlayers";

export const categoryContext = createContext();

export default function Form() {
  const [page, setPage] = useContext(PageContext);
  const [category, setCategory] = useState("Pass Yards");

  const [formData, setFormData] = useState({
    category: category,
  });

  function PageDisplay() {
    if (page === 0) {
      return (
        <>
          <FootballNavs formData={formData} setFormData={setFormData} />
          <FootballPlayers />
        </>
      );
    } else if (page === 1) {
      return (
        <>
          <BasketballNavs formData={formData} setFormData={setFormData} />
          <BasketballPlayers />
        </>
      );
    } else if (page === 2) {
      return (
        <>
          <BaseballNavs formData={formData} setFormData={setFormData} />
          <BaseballPlayers />
        </>
      );
    }
  }

  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <SportNavbar />
      <div className="form--container">
        <div className="body--container">{PageDisplay()}</div>
      </div>
    </categoryContext.Provider>
  );
}
