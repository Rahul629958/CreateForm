import ResponseRow from "./ResponseRow";

export default function(props:any)
{
    console.log("Data reached: ",props);
    const propsObject = JSON.parse(props.data.response_data);

    const firstName=propsObject.firstName;
    const lastName = propsObject.lastName;
    const email = propsObject.email;
    const phone=propsObject.phoneNum;
    const isDOI = propsObject.isDOI
    return (
        <>
        <div className="row h-60 mt-4 bg-green-200 rounded-2xl p-3">
            <div className="row h-8 font-semibold">
             Response id: {props.data.response_id}
            </div>
           <ResponseRow data={"First Name "} dataResponse={firstName} />
           <ResponseRow data={"Last Name "} dataResponse={lastName} />
           <ResponseRow data={"Email ID "} dataResponse={email} />
           <ResponseRow data={"Phone Number "} dataResponse={phone} />
           <ResponseRow data={"Accepted Condition? "} dataResponse={isDOI} />
        </div>
        </>
    )
}