import { useContext } from "react";
import { categoryContext } from "../App";
import Header from "../components/Header";
import "./pages_styles/MyEntriesPage.css";

export default function MyEntriesPage() {
  const [formData, setFormData] = useContext(categoryContext);
  console.log("fomrData.myEntries:", formData.myEntries);
  let newArray = [];

  formData.myEntries.forEach((nested) => {
    console.log("nested:", nested);
    let i = 0;
    while (i <= nested.length - 3) {
      console.log(i);
      newArray.push(
        <div>
          <h4> {nested[i].name}</h4>
          <h5>{nested[i].projection}</h5>
          <h6>{nested[i].selection}</h6>
        </div>
      );
      i++;
    }
    newArray.push(
      <div>
        <p>
          ${nested[nested.length - 2]} wagered to win $
          {nested[nested.length - 1]}{" "}
        </p>
      </div>
    );
  });

  console.log(newArray);
  return (
    <>
      <Header active={"entries"} />
      <div>{newArray}</div>
    </>
  );
}
