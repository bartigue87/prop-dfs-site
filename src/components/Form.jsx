import { createContext, useContext, useState } from "react";
import BasketballPlayers from "../pages/BasketballPlayers";
import { PageContext } from "../App";
import BasketballNavs from "./BasketballNavs";

export const categoryContext = createContext();

export default function Form() {
  const [page, setPage] = useContext(PageContext);
  const [category, setCategory] = useState("");

  const [formData, setFormData] = useState({
    category: "Points",
  });

  function PageDisplay() {
    if (page === 1) {
      return (
        <>
          <BasketballNavs formData={formData} setFormData={setFormData} />
          <BasketballPlayers />
        </>
      );
    } else if (page === 0) {
      return <h1>Working</h1>;
    }
  }

  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <div className="form--container">
        <div className="body--container">{PageDisplay()}</div>
      </div>
    </categoryContext.Provider>
  );
}
