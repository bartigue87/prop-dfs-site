import "./component-styles/SportNav.css";

export default function SportNavbar() {
  return (
    <nav className="nav--container">
      <div className="nav--tile">
        <input
          className="nav--input"
          type="radio"
          name="sport"
          id="football"
          checked
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
        />
        <label className="nav--label" htmlFor="basketball">
          <i className="fas fa-basketball-ball nav--icon"></i>
          <h6>Basketball</h6>
        </label>
      </div>
      <div className="nav--tile">
        <input className="nav--input" type="radio" name="sport" id="baseball" />
        <label className="nav--label" htmlFor="baseball">
          <i className="fas fa-baseball-ball nav--icon"></i>
          <h6>Baseball</h6>
        </label>
      </div>
      <div className="nav--tile">
        <input className="nav--input" type="radio" name="sport" id="hockey" />
        <label className="nav--label" htmlFor="hockey">
          <i className="fas fa-hockey-puck nav--icon"></i>
          <h6>Hockey</h6>
        </label>
      </div>
    </nav>
  );
}
