import { useContext, useState } from "react";
import { PageContext } from "./Form";
import { categoryContext } from "../App";
import "./component-styles/SportNav.css";
import FootballNavs from "./FootballNavs";
import BasketballNavs from "./BasketballNavs";
import BaseballNavs from "./BaseballNavs";
import HockeyNavs from "./HockeyNavs";

export default function SportNavbar() {
  const [page, setPage] = useContext(PageContext);
  const [formData, setFormData] = useContext(categoryContext);
  const [sportMaj, setSportMaj] = useState("football");
  const handleRadio = (event) => {
    setSportMaj(event.target.value);
    handleClick(event.target.value);
  };

  const handleClick = (sport) => {
    if (sport === "football") {
      setPage(0);
      setFormData({
        ...formData,
        category: "Pass Yards",
      });
    } else if (sport === "basketball") {
      setPage(1);
      setFormData({
        ...formData,
        category: "Points",
      });
    } else if (sport === "baseball") {
      setPage(2);
      setFormData({
        ...formData,
        category: "Strikeouts",
      });
    } else if (sport === "hockey") {
      setPage(3);
      setFormData({
        ...formData,
        category: "Saves",
      });
    }
  };

  const displayCategoryNav = () => {
    if (page === 0) {
      return <FootballNavs />;
    } else if (page === 1) {
      return <BasketballNavs />;
    } else if (page === 2) {
      return <BaseballNavs />;
    } else if (page === 3) {
      return <HockeyNavs />;
    }
  };

  return (
    <>
      <nav className="nav--container">
        <div className="nav--tile">
          <input
            className="nav--input"
            type="radio"
            name="sport"
            id="football"
            value="football"
            checked={sportMaj === "football"}
            onChange={handleRadio}
          />
          <label className="nav--label" htmlFor="football">
            <i className="fas fa-football-ball nav--icon"></i>
            <h6>Football</h6>
          </label>
        </div>
        <div className="nav--tile">
          <input
            className="nav--input"
            type="radio"
            name="sport"
            id="basketball"
            value="basketball"
            checked={sportMaj === "basketball"}
            onChange={handleRadio}
          />
          <label className="nav--label" htmlFor="basketball">
            <i className="fas fa-basketball-ball nav--icon"></i>
            <h6>Basketball</h6>
          </label>
        </div>
        <div className="nav--tile">
          <input
            className="nav--input"
            type="radio"
            name="sport"
            id="baseball"
            value="baseball"
            checked={sportMaj === "baseball"}
            onChange={handleRadio}
          />
          <label className="nav--label" htmlFor="baseball">
            <i className="fas fa-baseball-ball nav--icon"></i>
            <h6>Baseball</h6>
          </label>
        </div>
        <div className="nav--tile">
          <input
            className="nav--input"
            type="radio"
            name="sport"
            id="hockey"
            value="hockey"
            checked={sportMaj === "hockey"}
            onChange={handleRadio}
          />
          <label className="nav--label" htmlFor="hockey">
            <i className="fas fa-hockey-puck nav--icon"></i>
            <h6>Hockey</h6>
          </label>
        </div>
      </nav>
      {displayCategoryNav()}
    </>
  );
}
