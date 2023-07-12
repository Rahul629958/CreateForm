export default function ArrUnit(props: any) {
  var name = props.name;
  var imgURL = props.imgURL;

  return (
    <>
      <div className="col-lg-3 col-xs-6 col-sm-6 pt-3 pb-1 block cursor-pointer">
        <div className=" rounded-2xl group  border-blue-500 bg-blue-200 hover:border-2 hover:bg-blue-500 border-solid">
         
          <img
            src={imgURL}
            
            style={{
              width: "100%",
              borderRadius:"1rem"
            }}
          />

          <div
            className="group-hover:text-white"
            style={{
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
              textAlign: "center",
            }}
          >
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
