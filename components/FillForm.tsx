import { useEffect, useState } from "react";
import DOIform from "./DOIform";

export default function FillForm(props: any) {
  const [valData, setValData] = useState("");

  var obj = props.e;
  const styleVal = props.stylesVal;
  var isDOI = false;
  if (obj.title.includes("Double Opt-In")) {
    isDOI = true;
  } else {
    isDOI = false;
  }

  useEffect(() => {
    if (props.forFilling) {
      var temp = obj.title;
      if (temp.includes("First")) {
        props.setFirstName(valData);
      } else if (temp.includes("Last")) {
        props.setLastName(valData);
      } else if (temp.includes("Email")) {
        props.setEmail(valData);
      } else if (temp.includes("Phone")) {
        props.setPhoneNum(valData);
      }
    }
  }, [valData]);

  return (
    <>
      {isDOI ? (
        <DOIform
          value={obj.textVal}
          stylesVal={styleVal}
          makeDisable={props.makeDisable}
          func={props.setDOI}
        />
      ) : (
        <>
          <p style={styleVal}>{obj.title}</p>
          {props.makeDisable ? (
            <input
              disabled
              className="w-[80%] h-fit pt-2 pr-2 pl-2 border-b-2 border-b-green-500 mt-[-0.25rem]"
              type="email"
              placeholder={obj.placeholder}
              style={styleVal}
            />
          ) : (
            <input
              className="w-[80%] h-fit pt-2 pr-2 pl-2 border-b-2 border-b-green-500 mt-[-0.25rem]"
              type="email"
              placeholder={obj.placeholder}
              style={styleVal}
              value={valData}
              onChange={(e) => setValData(e.target.value)}
            />
          )}{" "}
          <br />
          <br />
        </>
      )}
    </>
  );
}
