import FillForm from "./FillForm";

export default function Form(props: any) {
  const arr = props.formContent;
  const styles = {
    fontSize: props.fontSize.toString() + "rem",
    fontWeight: props.fontWeight.toString(),
    color: props.fontColor,
    fontStyle: props.fontStyle,
    fontFamily: props.fontFamily,
  };

  return (
    <>
      <div className=" pr-2 pl-2 pb-2 ">
        {arr.map((e: any) => (
          <FillForm e={e} stylesVal={styles} key={e.title} />
        ))}
      </div>
    </>
  );
}
