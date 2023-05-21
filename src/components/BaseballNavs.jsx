import { useContext } from "react";
import CategoryNav from "./CategoryNav";
import { categoryContext } from "../App";

export default function BaseballNavs() {
  const [formData, setFormData] = useContext(categoryContext);

  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Strikeouts"}
        value={"Strikeouts"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Pitching Outs"}
        value={"Pitching Outs"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"ERA"}
        value={"ERA"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
