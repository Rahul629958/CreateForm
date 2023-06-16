import { useState } from "react";

function SwitchTab(props: any) {
  return (
    <>
      <div>
        <span
          onClick={(e) => props.clickFunc(false)}
          className={
            "cursor-pointer mt-20 ml-12 rounded-tr-2xl rounded-tl-2xl pt-[0.2rem] pr-[0.5rem] pb-[0.2rem] pl-[0.5rem] text-[200%] rounded-2xl " +
            (props.isStyle
              ? " border-0"
              : " border-b-[0.3rem] border-t-2 border-green-500")
          }
        >
          Content
        </span>
        <span> </span>
        <span
          onClick={(e) => props.clickFunc(true)}
          className={
            "cursor-pointer  mt-20 ml-12 rounded-tr-2xl rounded-tl-2xl pt-[0.2rem] pr-[0.5rem] pb-[0.2rem] pl-[0.5rem] text-[200%] rounded-2xl " +
            (!props.isStyle
              ? " border-0"
              : " border-b-[0.3rem] border-t-2 border-blue-500")
          }
        >
          style
        </span>
      </div>
    </>
  );
}

export default SwitchTab;
