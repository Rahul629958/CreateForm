import { useEffect, useState } from "react";
// import Tabs from "./Tabs";
export default function CheckBoxWithText(props: any) {


  return (
    <>
    <div
      className={"row cursor-pointer align-middle content-center h-14 rounded-2xl border-t border-b mr-4 mb-2 text-[1.1rem] " + (props.obj.isSelected?" border-green-400 text-green-600":" border-red-600 text-red-500")}
    >
      <div onClick={(e)=>(props.func(!props.obj.isSelected))} className="row">
      <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
        <input type="checkbox" checked={props.obj.isSelected} onChange={(e)=>(props.func(!props.obj.isSelected))} />
      </div>
      <div className="col">{props.obj.title}</div>
      </div>

    </div>

    
    {props.obj.title.includes("Double Opt-In") ? (
        <input
          type="text"
          onChange={(e)=>(props.setTextVal(e.target.value))}
          value={props.textVal}
          className=" h-20 overflow-y-scroll rounded-2xl border w-[85%] ml-12 mt-[-0.5rem] border-black text-black p-2"
        />
      ) : (
        <></>
      )}
     {/* <Tabs /> */}
     



    </>
  );
}
