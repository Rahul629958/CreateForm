"use client";

import IconWithName from "./IconWithName";
import HomepageFormList from "./HomepageFormList";
import { useEffect, useState } from "react";
import ResponseOverview from "./ResponseOverview";
import Loading from "./Loading";

export default function Homepage() {
  const [arr, setArr] = useState([]);
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.GET_FORM_ID!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        });

        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData;
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
          setArr(responseJSON.arr);
          setLoading(false);
          // console.log("THi sis final arr: ",arr);
        } else {
          setLoading(false)
          alert("Error:" + response.statusText);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  // const arr=[{form_id:1689281529111},{form_id:4567},{form_id:7890}]

  return (
    <>
      <IconWithName />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-lg-9">
            <div className="row h-10 text-2xl  bg-slate-200 pt-1">
              <div className="col">Forms</div>
            </div>
            <div className="row h-[70vh]">
             <HomepageFormList arr={arr} isLoading={isLoading}/>
            </div>
          </div>

          <div
            className="col "
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "darkgray",
            }}
          >
            <div className="row h-10 text-2xl bg-slate-300 pt-1">
              <div className="col">View Responses</div>
            </div>
            <div className="row h-[70vh] overflow-y-scroll p-2">
              <div className="container pt-4">
                {arr.length>0?arr.map((e: any) => (
                  <ResponseOverview id={e.form_id} key={e.form_id} />
                )):isLoading?<Loading height={50}/>:
                <div className=" text-center mt-4">
            <p>No Response Yet</p>
            </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
