import { useContext } from "react";
import CategoryNav from "./CategoryNav";
import { categoryContext } from "./Form";

export default function FootballNavs() {
  const [formData, setFormData] = useContext(categoryContext);

  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Pass Yards"}
        value={"Pass Yards"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Pass TDs"}
        value={"Pass TDs"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rec Yards"}
        value={"Rec Yards"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Receptions"}
        value={"Receptions"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Targets"}
        value={"Targets"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rush Yards"}
        value={"Rush Yards"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rush Attempts"}
        value={"Rush Attempts"}
        formData={formData}
        setFormData={setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
