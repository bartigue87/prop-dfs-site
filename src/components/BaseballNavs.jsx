import CategoryNav from "./CategoryNav";

export default function BaseballNavs(props) {
  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Strikeouts"}
        value={"Strikeouts"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Pitching Outs"}
        value={"Pitching Outs"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Earned Runs Allowed"}
        value={"Earned Runs Allowed"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
