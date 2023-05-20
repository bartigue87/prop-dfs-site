import { useContext, useEffect } from "react";
import { categoryContext } from "./Form";
import "./component-styles/CategoryNav.css";

export default function CategoryNav(props) {
  const [formData, setFormData] = useContext(categoryContext);

  const handleRadio = (event) => {
    props.setFormData({
      ...props.formData,
      [props.name]: event.target.value,
    });
  };

  function handleClick() {
    setFormData({
      ...formData,
      category: props.category,
    });
  }

  useEffect(() => {
    handleClick;
  }, []);

  return (
    <div className="category--tile">
      <label className="category--label" htmlFor={props.category}>
        <h6>{props.category}</h6>
      </label>
      <input
        className="category--input"
        type="radio"
        value={props.value}
        name={props.name}
        id={props.category}
        onChange={handleRadio}
        checked={formData.category === props.category}
        onClick={handleClick}
      />
    </div>
  );
}
