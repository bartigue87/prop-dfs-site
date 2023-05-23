import { useNavigate } from "react-router";
import "./component-styles/Modal.css";

export default function Modal(props) {
  const navigate = useNavigate();

  const handleEntriesNav = () => {
    navigate("/entries");
  };
  const closeModal = () => {
    props.setModalStyle({ display: "none" });
  };
  return (
    <div style={props.modalStyle} className="modal--container">
      <div className="modal">
        <h2>Bet Placed!</h2>
        <div>
          <button onClick={handleEntriesNav}>View Entries</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
