import "./component-styles/Modal.css";

export default function Modal(props) {
  const closeModal = () => {
    props.setModalStyle({ display: "none" });
  };
  return (
    <div style={props.modalStyle} className="modal--container">
      <div className="modal">
        <h2>Bet Placed!</h2>
        <div>
          <button>View Entries</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
