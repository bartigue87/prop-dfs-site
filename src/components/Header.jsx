import { useNavigate } from "react-router-dom";
import "./component-styles/Header.css";

export default function Header(props) {
  const navigate = useNavigate();

  const handleEntriesNav = () => {
    navigate("/entries");
  };
  const handleBoardNav = () => {
    navigate("/");
  };

  let style = {
    borderBottom: "3px solid black",
    fontSize: "20px",
    fontWeight: "900",
  };

  let boardStyle = props.active === "board" ? style : {};
  let entriesStyle = props.active === "entries" ? style : {};
  return (
    <>
      <header>
        <div className="left--header">
          <h3>Prop Hive</h3>
          <p className="nav--item" onClick={handleBoardNav} style={boardStyle}>
            Board
          </p>
          <p
            className="nav--item"
            onClick={handleEntriesNav}
            style={entriesStyle}
          >
            My Entries
          </p>
        </div>
        <div className="right--header">
          <button disabled>Login</button>
          <button disabled>Sign Up</button>
        </div>
      </header>
    </>
  );
}
