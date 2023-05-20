import { useContext } from "react";
import CategoryNav from "./CategoryNav";
import { categoryContext } from "./Form";

export default function HockeyNavs() {
  const [formData, setFormData] = useContext(categoryContext);

  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Saves"}
        value={"Saves"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Goals Allowed"}
        value={"Goals Allowed"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Shots On Goal"}
        value={"Shots On Goal"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
