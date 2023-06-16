import DOIform from "./DOIform";

export default function FillForm(props: any) {
  var obj = props.e;
  const styleVal = props.stylesVal;
  var isDOI = false;
  if (obj.title.includes("Double Opt-In")) {
    isDOI = true;
  } else {
    isDOI = false;
  }
  return (
    <>
      {isDOI ? (
        <DOIform value={obj.textVal} stylesVal={styleVal} />
      ) : (
        <>
          <p style={styleVal}>{obj.title}</p>
          <input className="w-[80%] h-fit pt-2 pr-2 pl-2 border-b-2 border-b-green-500 mt-[-0.25rem]" type="email" placeholder={obj.placeholder} style={styleVal}/>
          <br />
          <br />
        </>
      )}
    </>
  );
}
