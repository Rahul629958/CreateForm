import loadingIcon from "../public/loading.gif"
import Image from "next/image"

export default function(props:any)
{ const height = props.height;
    return(
        <>
     <div className="container ml-10 ">
      <Image src={loadingIcon} alt="loading..." height={height} ></Image>
     </div>
        </>
    )
}