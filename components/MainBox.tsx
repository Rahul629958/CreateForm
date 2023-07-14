"use client";

import { useEffect, useState } from "react";
import Form from "./Form";
import IconName from "./IconWithName";
import NotFound from "./NotFound";
import Tabs from "./Tabs";
import Loading from "./Loading";

export default function MainBox(props: any) {
  const [id,setFormID] = useState(props.id);
  
   const [isLoading,setLoading] = useState(props.id>0?true:false);
  const [Link,setLink] = useState("");
  const [correctLink,setCorrectLink] = useState(true);

  const [formValues,setFormValues] = useState({
    contents: {
          isfirstName: false,
          isLastName: false,
          isEmail: false,
          isPhone: false,
          isDOI: false,
          textVal: "",
        },
        styles: {
          fontSize: 1.1,
          fontStyle: "cursive",
          fontFamily: "sans-serif",
          fontColor: "#000000",
          fontWeight: 700,
          bgColor: "#ffffff",
        },
        form_id: id,
  });

useEffect(()=>
{
  if(BigInt(props.id)>0){
    const fetchData= async () => {
      try {
        console.log("Here it reaahches");
        const response = await fetch("http://localhost:3000/api/get-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:id,
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
          setLink("http://localhost:3000/form/"+id);
          if(BigInt(responseJSON.form_id) <0)
          {
            console.log("here is error of id");
            setCorrectLink(false);
            setLoading(false);
          }else{
          setFormValues(responseJSON);
          setLoading(false);
          }
        } else {
          console.error("Error:", response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
    }
},[])
 





  if(id<0)
  {
    setFormID(new Date().getTime());
  }











  const [formContent, setFormContent] = useState([] as any);

  const [isfirstName, setfirstName] = useState(false);
  const [isLastName, setLastName] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isPhone, setPhone] = useState(false);
  const [isDOI, setDOI] = useState(false);
  const [textVal, setTextVal] = useState("");

  const [fontSize, setFontSize] = useState(0.8);
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontWeight, setFontWeight] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");








  useEffect(()=>
  {
  setfirstName(formValues.contents.isfirstName)
  setLastName(formValues.contents.isLastName)
  setEmail(formValues.contents.isEmail)
  setPhone(formValues.contents.isPhone)
  setDOI(formValues.contents.isDOI)
  setTextVal(formValues.contents.textVal)

  setFontSize(formValues.styles.fontSize)
  setFontStyle(formValues.styles.fontStyle)
  setFontFamily(formValues.styles.fontFamily)
  setFontColor(formValues.styles.fontColor)
  setFontWeight(formValues.styles.fontWeight)
  setBgColor(formValues.styles.bgColor)
    
  },[formValues])






  const [arrObj, setArrObj] = useState([
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

 
  

  const [formVars, setFormVars] = useState({
    contents: {
      isfirstName: false,
      isLastName: false,
      isEmail: false,
      isPhone: false,
      isDOI: false,
      textVal: "",
    },
    styles: {
      fontSize: 0.8,
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: "sans-serif",
      fontColor: "#000000",
      bgColor: "#ffffff",
    },
    form_id: id,
  });

  useEffect(() => {
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
      form_id: id,
    });
  }, [
    isfirstName,
    isLastName,
    isEmail,
    isPhone,
    isDOI,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    fontColor,
    bgColor,
  ]);

  async function handleClick() {
    try {
      const response = await fetch("http://localhost:3000/api/save-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formVars),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); 
        // Data received successfully

        setLink("http://localhost:3000/form/"+id);
        alert("Saved successfully.");
      } else {
        console.error("Error:", response.statusText);
        alert("Error"+response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }















  return (
<>
    {
      correctLink?
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <IconName />
          </div>
          <div className="col h-28 pt-8">
            <div className=" shadow-md rounded-full h-12 p-1 row">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => handleClick()}
                >
                  Save/Update
                </button>
              </div>
              
              <div className="col pl-4">
            
              <a href={Link} target="_blank">{Link}</a>
              </div>
              <div className="col-md-1"></div>
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
            >{ isLoading?<Loading height={200}/>:
              <Form
                formContent={formContent}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontColor={fontColor}
                fontStyle={fontStyle}
                fontFamily={fontFamily}
                forFilling={false}
              />
            }
            </div>
          </div>
        </div>
      </div>
    </>
    :
    <NotFound />
}
</>
  );
}
