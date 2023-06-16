export default function DOIform(props:any)
{
    var styleVal = props.stylesVal;
    return (
        <>
        <div className="row" style={{...styleVal, borderRadius:"1rem",borderWidth:"1px", borderStyle:"solid",overflow:"hidden"}}>
        <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
            
           <input type="checkbox" className=" mt-3"/>
          </div>
          <div className="col overflow-scroll h-16 mr-[0.2rem]">
            <span className=" underline font-bold">Opt-In</span><br/>
           {(props.value)}
          </div>
          </div>
          </>
    );
}