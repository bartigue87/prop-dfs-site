import CategoryNav from "./CategoryNav";

export default function FootballNavs(props) {
  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Pass Yards"}
        value={"Pass Yards"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Pass TDs"}
        value={"Pass TDs"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rec Yards"}
        value={"Rec Yards"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Receptions"}
        value={"Receptions"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Targets"}
        value={"Targets"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rush Yards"}
        value={"Rush Yards"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rush Attempts"}
        value={"Rush Attempts"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
