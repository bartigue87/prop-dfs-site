import { useContext } from "react";
import CategoryNav from "./CategoryNav";
import { categoryContext } from "./Form";

export default function BasketballNavs() {
  const [formData, setFormData] = useContext(categoryContext);

  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Points"}
        value={"Points"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rebounds"}
        value={"Rebounds"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Assists"}
        value={"Assists"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
