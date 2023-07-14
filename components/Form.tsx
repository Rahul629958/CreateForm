import FillForm from "./FillForm";

export default function Form(props: any) {
  const arr = props.formContent;
  const styles = {
    fontSize: props.fontSize.toString() + "rem",
    fontWeight: props.fontWeight.toString(),
    color: props.fontColor,
    fontStyle: props.fontStyle,
    fontFamily: props.fontFamily,
    backgroundColor: props.backgroundColor,
  };
  var makeDisable = true;
  if (props.forFilling == true) {
    makeDisable = false;
  }

  return (
    <>
      <div className=" pr-2 pl-2 pb-2 ">
        {arr.map((e: any) => (
          <FillForm
            e={e}
            stylesVal={styles}
            key={e.title}
            makeDisable={makeDisable}
            setFirstName={props.setFirstName}
            setLastName={props.setLastName}
            setEmail={props.setEmail}
            setPhoneNum={props.setPhoneNum}
            setDOI={props.setDOI}
            forFilling={props.forFilling}
          />
        ))}
      </div>
    </>
  );
}
