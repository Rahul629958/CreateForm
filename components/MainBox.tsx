"use client";

import { useEffect, useState } from "react";


import SelectBox from "./SelectBox";
import StyleBox from "./StyleBox";
import Form from "./Form";
import IconName from "./IconWithName";
import SwitchTab from "./SwitchTabBtn";
import Tabs from "./Tabs";

export default function MainBox() {
  const [isStyle, setStyleBtn] = useState(false);
  const [formContent,setFormContent] = useState([] as any);

  const [isfirstName, setfirstName] = useState(false);
  const [isLastName, setLastName] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isPhone, setPhone] = useState(false);
  const [isDOI, setDOI] = useState(false);
  const [textVal, setTextVal] = useState("");


  const [fontSize,setFontSize] = useState(0.8);
  const [fontStyle,setFontStyle] = useState("normal");
  const [fontFamily,setFontFamily] = useState("sans-serif");
  const [fontColor,setFontColor] = useState("#000000");
  const [fontWeight,setFontWeight] = useState(400);
  const [bgColor,setBgColor] = useState("#ffffff");
    
  const [arrObj,setArrObj] = useState([
    {
      title: "First name",
      placeholder: "Enter your first name.",
      type: "text",
      isSelected:false,
    },
    {
      title: "Last name",
      placeholder: "Enter your last name.",
      type: "text",
      isSelected:false,
    },
    {
      title: "Email",
      placeholder: "Enter your email address.",
      type: "email",
      isSelected:false,
    },
    {
      title: "Phone number",
      placeholder: "Enter your phone number.",
      type: "Phone",
      isSelected:false,
    },
    {
      title: "Double Opt-In",
      textVal:"",
      type: "text",
      isSelected:false,
    },
  ]);




useEffect(()=>
{
  setArrObj(
    [
      {
        title: "First name",
        placeholder: "Enter your first name.",
        type: "text",
        isSelected:isfirstName,
      },
      {
        title: "Last name",
        placeholder: "Enter your last name.",
        type: "text",
        isSelected:isLastName,
       
      },
      {
        title: "Email",
        placeholder: "Enter your email address.",
        type: "email",
        isSelected:isEmail,
        
      },
      {
        title: "Phone number",
        placeholder: "Enter your phone number.",
        type: "Phone",
        isSelected:isPhone,
        
      },
      {
        title: "Double Opt-In",
        textVal:textVal,
        type: "text",
        isSelected:isDOI,
        
      },
    ]
  );


 

},[isfirstName,isLastName,isEmail,isPhone,isDOI]);


useEffect(()=>
{
  var tempArr = [];
  for (var i = 0; i < 5; i++) {
    if (arrObj[i].isSelected) {
      tempArr.push(arrObj[i]);
    }
  }

  setFormContent(tempArr);
},[arrObj])


  return (
    <>
      <IconName />
      <div className="container mt-2 rounded-[5rem] w-[80%] overflow-hidden shadow-lg">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 h-[80vh] p-4">
            {/* <SwitchTab clickFunc={setStyleBtn} isStyle={isStyle}/>
            {isStyle ?

                 <StyleBox 
                  fontSize={fontSize} fontWeight={fontWeight} fontColor={fontColor} fontStyle={fontStyle} fontFamily={fontFamily} 
                  setFontSize={setFontSize} setFontWeight={setFontWeight} setFontColor={setFontColor} setFontStyle={setFontStyle} setFontFamily={setFontFamily}
                  /> 
                  :
                  <SelectBox
                  arrayVal={arrObj} textVal={textVal} setfirstName={setfirstName} setLastName={setLastName} 
                  setEmail={setEmail} setDOI={setDOI} setTextVal={setTextVal} setPhone={setPhone}
                  />
            } */}
             <Tabs 
             fontSize={fontSize} fontWeight={fontWeight} fontColor={fontColor} fontStyle={fontStyle} fontFamily={fontFamily} bgColor={bgColor}
             setFontSize={setFontSize} setFontWeight={setFontWeight} setFontColor={setFontColor} setFontStyle={setFontStyle} setFontFamily={setFontFamily} setBgColor={setBgColor}
             
             arrayVal={arrObj} textVal={textVal} setfirstName={setfirstName} setLastName={setLastName} 
             setEmail={setEmail} setDOI={setDOI} setTextVal={setTextVal} setPhone={setPhone}
             />
          </div>
         
          <div className="col h-[80vh] p-[6vh] bg-[blanchedalmond] border-l-[2px] border-l-orange-500">
            <div className="container formSec col-sm-12 col-md-8 col-lg-6 rounded-2xl h-[64vh] pt-8 pl-2 pr-2 overflow-y-scroll overflow-x-scroll" style={{background:bgColor}}>
              <Form 
               formContent={formContent} fontSize={fontSize} fontWeight={fontWeight}
               fontColor={fontColor} fontStyle={fontStyle} fontFamily={fontFamily} 
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
