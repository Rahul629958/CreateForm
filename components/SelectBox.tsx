import CheckBoxWithText from "./CheckBoxWithText";
import Tabs from "./Tabs";
function selectBox(props: any) {
  

  return (
    <>
      <div className="selectBox pl-[1rem] pr-4 pt-[2rem] rounded-[1rem] h-[65vh]" >
        {props.arrayVal.map((e:any) => (
          <CheckBoxWithText
            obj={e}
            func={
              e.title.includes("First")
                ? props.setfirstName
                : e.title.includes("Last")
                ? props.setLastName
                : e.title.includes("Email")
                ? props.setEmail
                : e.title.includes("Phone")
                ? props.setPhone
                : props.setDOI
            }
            setTextVal={props.setTextVal}
            textVal={props.textVal}
            key={e.title}
          />
        ))}

        {/* <Tabs /> */}
      </div>
    </>
  );
}

export default selectBox;
