"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import IconName from "./IconWithName";


import Tabs from "./Tabs";
import Link from "next/link";

export default function MainBox(props: any) {
  const [formContent, setFormContent] = useState([] as any);

  const [isfirstName, setfirstName] = useState(props.isfirstName);
  const [isLastName, setLastName] = useState(props.isLastName);
  const [isEmail, setEmail] = useState(props.isEmail);
  const [isPhone, setPhone] = useState(props.isPhone);
  const [isDOI, setDOI] = useState(props.isDOI);
  const [textVal, setTextVal] = useState(props.textVal);

  const [fontSize, setFontSize] = useState(props.fontSize);
  const [fontStyle, setFontStyle] = useState(props.fontStyle);
  const [fontFamily, setFontFamily] = useState(props.fontFamily);
  const [fontColor, setFontColor] = useState(props.fontColor);
  const [fontWeight, setFontWeight] = useState(props.fontWeight);
  const [bgColor, setBgColor] = useState(props.bgColor);

  const [arrObj, setArrObj] = useState([
    {
      title: "First name",
      placeholder: "Enter your first name.",
      type: "text",
      isSelected: props.isfirstName,
    },
    {
      title: "Last name",
      placeholder: "Enter your last name.",
      type: "text",
      isSelected: props.isLastName,
    },
    {
      title: "Email",
      placeholder: "Enter your email address.",
      type: "email",
      isSelected: props.isEmail,
    },
    {
      title: "Phone number",
      placeholder: "Enter your phone number.",
      type: "Phone",
      isSelected: props.isPhone,
    },
    {
      title: "Double Opt-In",
      textVal: props.textVal,
      type: "text",
      isSelected: props.isDOI,
    },
  ]);

  useEffect(() => {
    setArrObj([
      {
        title: "First name",
        placeholder: "Enter your first name.",
        type: "text",
        isSelected: isfirstName,
      },
      {
        title: "Last name",
        placeholder: "Enter your last name.",
        type: "text",
        isSelected: isLastName,
      },
      {
        title: "Email",
        placeholder: "Enter your email address.",
        type: "email",
        isSelected: isEmail,
      },
      {
        title: "Phone number",
        placeholder: "Enter your phone number.",
        type: "Phone",
        isSelected: isPhone,
      },
      {
        title: "Double Opt-In",
        textVal: textVal,
        type: "text",
        isSelected: isDOI,
      },
    ]);
  }, [isfirstName, isLastName, isEmail, isPhone, isDOI]);

  useEffect(() => {
    var tempArr = [];
    for (var i = 0; i < 5; i++) {
      if (arrObj[i].isSelected) {
        tempArr.push(arrObj[i]);
      }
    }

    setFormContent(tempArr);
  }, [arrObj]);

  const [id, setId] = useState(props.id < 0 ? new Date().getTime() : props.id);

  const[formVars,setFormVars]=useState({});

  useEffect(()=>
  {
    setFormVars({
      contents: {
        isfirstName: isfirstName,
        isLastName: isLastName,
        isEmail: isEmail,
        isPhone: isPhone,
        isDOI: isDOI,
        textVal: textVal,
      },
      styles: {
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        fontFamily: fontFamily,
        fontColor: fontColor,
        bgColor: bgColor,
      },
      form_id:id
    })
  },[isfirstName,isLastName,isEmail,isPhone,isDOI,fontSize,fontWeight,fontStyle,fontFamily,fontColor,bgColor])

async function handleClick()
{
  try {
    const response = await fetch('http://localhost:3000/api/save-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formVars)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData); // Data received successfully
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
    
  
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <IconName />
          </div>
          <div className="col h-28 pt-8">
            <div className=" shadow-md rounded-full h-12 p-1 row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                {/* <Link
                  // href={{
                  //   pathname: "/edit-form/" + id,
                  //   query: JSON.stringify(formVars),
                  // }}
                  href={'/edit-form/'+id}
                > */}
                  <button className="btn btn-outline-success" onClick={(e)=>(handleClick())}>
                    Save/Update
                  </button>
                {/* </Link> */}
              </div>
              <div className="col-md-1"></div>
              <button className="btn btn-outline-primary col-md-3">
                Copy Link
              </button>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 rounded-[5rem] w-[80%] overflow-hidden shadow-lg">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 h-[80vh] p-4">
            <Tabs
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontColor={fontColor}
              fontStyle={fontStyle}
              fontFamily={fontFamily}
              bgColor={bgColor}
              setFontSize={setFontSize}
              setFontWeight={setFontWeight}
              setFontColor={setFontColor}
              setFontStyle={setFontStyle}
              setFontFamily={setFontFamily}
              setBgColor={setBgColor}
              arrayVal={arrObj}
              textVal={textVal}
              setfirstName={setfirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setDOI={setDOI}
              setTextVal={setTextVal}
              setPhone={setPhone}
            />
          </div>

          <div className="col h-[80vh] p-[6vh] bg-[blanchedalmond] border-l-[2px] border-l-orange-500">
            <div
              className="container formSec col-sm-12 col-md-8 col-lg-6 rounded-2xl h-[64vh] pt-8 pl-2 pr-2 overflow-y-scroll overflow-x-scroll"
              style={{ background: bgColor }}
            >
              <Form
                formContent={formContent}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontColor={fontColor}
                fontStyle={fontStyle}
                fontFamily={fontFamily}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
