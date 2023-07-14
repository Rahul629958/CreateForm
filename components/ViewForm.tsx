"use client";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Form from "./Form";
import Loading from "./Loading";

export default function (props: any) {

  const form_id = props.id;

  const [isLoading,setLoading] = useState(true);
  const [correctLink, setLinkCorrect] = useState(true);
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
        form_id: "",
  });

 
  

  useEffect(()=>
  {

    const fetchData = async () => {
      try {
        const response = await fetch(process.env.GET_DATA!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:form_id,
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const responseJSON = responseData;
          console.log("THis is responseDat0:", responseJSON); // Data received successfully
          // setFormValues(JSON.parse(responseData));
  
          if(BigInt(responseJSON.form_id) <0)
          {
            console.log("here is error of id");
            setLinkCorrect(false);
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
  },[])






  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isDOI, setDOI] = useState("false");
  const [responseVal, setResponseVal] = useState({});

  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setResponseVal({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      isDOI: isDOI,
      form_id: form_id,
    });
  }, [firstName, lastName, email, phoneNum, isDOI]);

  const arrObj = [
    {
      title: "First name",
      placeholder: "Enter your first name.",
      type: "text",
      isSelected: formValues.contents.isfirstName,
    },
    {
      title: "Last name",
      placeholder: "Enter your last name.",
      type: "text",
      isSelected: formValues.contents.isLastName,
    },
    {
      title: "Email",
      placeholder: "Enter your email address.",
      type: "email",
      isSelected: formValues.contents.isEmail,
    },
    {
      title: "Phone number",
      placeholder: "Enter your phone number.",
      type: "Phone",
      isSelected: formValues.contents.isPhone,
    },
    {
      title: "Double Opt-In",
      textVal: formValues.contents.textVal,
      type: "text",
      isSelected: formValues.contents.isDOI,
    },
  ];

  var tempArr = [];
  for (var i = 0; i < 5; i++) {
    if (arrObj[i].isSelected) {
      tempArr.push(arrObj[i]);
    }
  }

  const handleClick = async () => {
    try {
      const response = await fetch(process.env.POST_RESPONSE!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseVal),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("THis is responseDat:", responseData); // Data received successfully
        // setFormValues(JSON.parse(responseData));
        setSubmitted(true);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    {
      correctLink?
      <div className="container pt-4 pb-4">

        {isLoading?<Loading height={300} />:
        <div className="row">
          <div className="col-sm-1 col-xs-1 col-md-3 h-[80vh]"></div>

          {isSubmitted ? (
            <>
              <div className=" col-sm-10 col-xs-10 col-md-6 h-[40vh] shadow-lg pt-[12vh] rounded-lg text-center font-extrabold text-2xl">
                Form Submitted!
                <div className="pt-[6vh]">
                  <button
                    className="btn btn-outline-success "
                    onClick={(e) => setSubmitted(false)}
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            </>
          ) :(
            <div
              className={
                "col-sm-10 col-xs-10 col-md-6 h-[90vh] shadow-lg p-4 rounded-lg overflow-y-scroll"
              }
              style={{ backgroundColor: formValues.styles.bgColor }}
            >
              <div
                className={
                  " text-center font-bold text-lg text-blue-500 bg-white"
                }
              >
                LayerPath Forms
              </div>
              <hr />
              <br />
              <Form
                formContent={tempArr}
                fontSize={formValues.styles.fontSize}
                fontWeight={formValues.styles.fontWeight}
                fontColor={formValues.styles.fontColor}
                fontStyle={formValues.styles.fontStyle}
                fontFamily={formValues.styles.fontFamily}
                backgroundColor={formValues.styles.bgColor}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhoneNum={setPhoneNum}
                setDOI={setDOI}
                forFilling={true}
              />
              <div className=" text-right mr-4">
                <button className="btn btn-info" onClick={(e) => handleClick()}>
                  Submit
                </button>
              </div>
            </div>
          )}

          <div className="col-sm-1 col-xs-1 col-md-3 h-[80vh]"></div>
        </div>


              }


      </div>
      :
      <NotFound />
}
    </>
  );
}
