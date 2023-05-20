import CategoryNav from "./CategoryNav";

export default function HockeyNavs(props) {
  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Saves"}
        value={"Saves"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Goals Allowed"}
        value={"Goals Allowed"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Shots On Goal"}
        value={"Shots On Goal"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
