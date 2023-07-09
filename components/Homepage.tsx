"use client";

import IconWithName from "./IconWithName";
import HomepageFormList from "./HomepageFormList";

export default function Homepage() {
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
            <div className="row overflow-y-scroll h-[70vh]">
              <HomepageFormList />
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
          </div>
        </div>
      </div>
    </>
  );
}
