import { useState } from "react"
import ArrUnit from "./ArrUnit";
export default function HomepageFormList()
{

    const [arr,setArr] = useState([{title:"This is title", name:"name",imgURL:"https://picsum.photos/seed/picsum/200/300"}]);
    
    return (
        <>
        <div className="col-lg-3 col-xs-6 col-sm-6 mt-3 mb-1 relative rounded-2xl group bg-blue-200 hover:bg-blue-500 block">
        <div className="absolute z-15 bg-white text-9xl  text-blue-500 group-hover:text-orange-300" style={{width:"50%",height:"40%", marginTop:"40%", marginLeft:"21%", borderRadius:"100rem",textAlign:"center"}}>+</div>
        <div className="absolute z-15 text-3xl text-blue-500 group-hover:text-white" style={{width:"100%",height:"20%",marginTop:"110%", paddingLeft:"11%"}}>Create New</div>
        </div>
       {arr.map((e)=>
        ( <>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            <ArrUnit title={e.title} name={e.name} imgURL={e.imgURL} key={e.name + Math.floor(Math.random()*10).toString()}/>
            </>
        ))}
        </>
    )
}