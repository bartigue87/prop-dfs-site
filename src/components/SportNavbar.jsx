import { useContext, useState } from "react";
import { PageContext } from "../App";
import "./component-styles/SportNav.css";

export default function SportNavbar() {
  const [page, setPage] = useContext(PageContext);
  const [formData, setFormData] = useState({
    sport: "football",
  });
  const handleRadio = (event) => {
    setFormData({
      [event.target.name]: event.target.value,
    });
    handleClick(event.target.value);
  };

  console.log(page);
  const handleClick = (sport) => {
    if (sport === "football") {
      setPage(0);
    } else if (sport === "basketball") {
      setPage(1);
    } else if (sport === "baseball") {
      setPage(2);
    } else if (sport === "hockey") {
      setPage(3);
    }
  };
  return (
    <nav className="nav--container">
      <div className="nav--tile">
        <input
          className="nav--input"
          type="radio"
          name="sport"
          id="football"
          value="football"
          checked={formData.sport === "football"}
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
          checked={formData.sport === "basketball"}
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
          checked={formData.sport === "baseball"}
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
          checked={formData.sport === "hoceky"}
          onChange={handleRadio}
        />
        <label className="nav--label" htmlFor="hockey">
          <i className="fas fa-hockey-puck nav--icon"></i>
          <h6>Hockey</h6>
        </label>
      </div>
    </nav>
  );
}
