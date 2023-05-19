import CategoryNav from "./CategoryNav";

export default function BasketballNavs(props) {
  const categoryNav = (
    <div className="category--container">
      <CategoryNav
        category={"Points"}
        value={"Points"}
        isChecked={true}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Rebounds"}
        value={"Rebounds"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
      <CategoryNav
        category={"Assists"}
        value={"Assists"}
        formData={props.formData}
        setFormData={props.setFormData}
        name={"category"}
      />
    </div>
  );
  return <>{categoryNav}</>;
}
