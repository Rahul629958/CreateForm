import { useState } from "react";
import ArrUnit from "./ArrUnit";
import Link from "next/link";
import Loading from "./Loading";
export default function HomepageFormList(props: any) {
  // const [arr, setArr] = useState([1689288847360,1689288846360,1689288827360]);
  const arr = props.arr;
  const isLoading=props.isLoading;
  // console.log("THis is arrV: ",arr);

  return (
    <>
      <div className="col-lg-3 col-xs-6 col-sm-6 mt-3 mb-1 relative rounded-2xl group bg-blue-200 hover:bg-blue-500 block cursor-pointer">
        <Link href={"/create-new"} target="_blank">
          <div
            className="absolute z-15 bg-white text-9xl  text-blue-500 group-hover:text-orange-300 pt-2"
            style={{
              width: "50%",
              height: "40%",
              marginTop: "50%",
              marginLeft: "21%",
              borderRadius: "100rem",
              textAlign: "center",
            }}
          >
            +
          </div>
          <div
            className="absolute z-15 text-3xl text-blue-500 group-hover:text-white mt-[15%]"
            style={{ width: "100%", height: "20%", paddingLeft: "11%" }}
          >
            Create New
          </div>
        </Link>
      </div>
      <div className="col">
        <div className="container pt-3 h-[70vh] overflow-y-scroll">
          {isLoading?<Loading height={300}/>:arr.length>0? arr.map((e: any) => (
            <>
              <ArrUnit id={e.form_id} key={e.form_id} />
            </>
          )):
          <div className=" text-center mt-28">
            <h1>No Form Created</h1>
            </div>}
        </div>
      </div>
    </>
  );
}
