import { useContext } from "react";
import { categoryContext } from "../App";
import Header from "../components/Header";
import "./pages_styles/MyEntriesPage.css";

export default function MyEntriesPage() {
  const [formData, setFormData] = useContext(categoryContext);
  let newArray = [];

  formData.myEntries.forEach((nested) => {
    let i = 0;
    while (i <= nested.length - 3) {
      newArray.push(
        <div>
          <h3> {nested[i].name}</h3>
          <h4>{nested[i].projection}</h4>
          <h5>{nested[i].selection}</h5>
        </div>
      );
      i++;
    }
    newArray.push(
      <div
        style={{
          borderBottom: "1px solid white",
          paddingBottom: "10px",
        }}
      >
        <p>
          ${nested[nested.length - 2]} wagered to win $
          {nested[nested.length - 1]}
        </p>
      </div>
    );
  });

  return (
    <>
      <Header active={"entries"} />

      <div className="entries--container">
        {newArray.length === 0 ? (
          <div className="no--entries">No Entries</div>
        ) : (
          <div className="entry">{newArray}</div>
        )}
      </div>
    </>
  );
}
