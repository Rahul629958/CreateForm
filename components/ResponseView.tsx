"use client";

import { useState,useEffect } from "react";
import IconWithName from "./IconWithName";
import ResponseUtil from "./ResponseUtil";
import Loading from "./Loading";

export default function(props:any)
{
    const id=props.id;



    const [arr,setArr] = useState([]);
    const [isLoading,setLoading] = useState(true);

  useEffect(()=>
  {

    const fetchData = async () => {
      try {
        const response = await fetch(process.env.GET_RESPONSE!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:id,
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData;
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
          setArr(responseJSON.arr);
          // console.log("THi sis final arr: ",arr);
          setLoading(false);
  
       
        } else {
          alert("Error:"+  response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
     fetchData();
  },[])


  console.log("Final arr: ",arr);



    return (
        <>
        <IconWithName />
        <hr/>
        <br/>
        <div className="container-fluid overflow-y-scroll">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col"> 
          <div className="row">
            <div className="col font-bold text-2xl">
           Form Id: {id}
           </div>
          </div>

       
          {isLoading?<Loading height={500}/>: arr.length>0?
            arr.map((e:any)=>
            (
             <ResponseUtil data={e} key={e.response_id}/>
            )):<div className=" text-center mt-28">
            <h1>No Response Yet</h1>
            </div>
          }
        

          </div>
          <div className="col-md-1"></div>
          </div>
        </div>
    

        </>
    )
}