import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import React, { useState } from "react";
import StyleBox from "./StyleBox";
import SelectBox from "./SelectBox";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Content",
    value: "tab1",
  },
  {
    title: "Style",
    value: "tab2",
  },
];

interface TabsProps {}

const Tabs = (props: any) => {
  const [isStyle,setStyleCheck] = useState(false);
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={clsx("flex w-full rounded-t-lg bg-white dark:bg-gray-800")}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={clsx(
              "group",
              "first:rounded-tl-lg last:rounded-tr-lg",
              "border-b first:border-r last:border-l",
              "border-gray-300 dark:border-gray-600",
              // "radix-state-active: border-b-gray-700 focus-visible: radix-state-active: border-b-transparent radix-state-inactive: bg-gray-50 dark: radix-state-active: border-b-gray-100 dark: radix-state-active: bg-gray-900 focus-visible:dark:radix-state-active: border-b-transparent dark:radix-state-inactive: bg-white",
            
              "flex-1 px-3 py-2.5",
              "focus:radix-state-active: border-b-red",
              "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 active: bg-gray-300"
              ,
              (value.includes("1")?isStyle?"bg-white":"bg-gray-300":isStyle?"bg-gray-300":"bg-white")
               
            )}
            onClick={(e)=>(value.includes("1")?setStyleCheck(false):setStyleCheck(true))}
          >
            <span
              className={clsx(
                "text-sm font-medium",
                "text-gray-900 dark:text-gray-900",
                
              )}
            >
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={clsx("rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800")}
        >
          <span className="text-sm text-gray-900 dark:text-gray-900">
            {
              {
                tab1: <SelectBox
                arrayVal={props.arrayVal} textVal={props.textVal} setfirstName={props.setfirstName} setLastName={props.setLastName} 
                setEmail={props.setEmail} setDOI={props.setDOI} setTextVal={props.setTextVal} setPhone={props.setPhone}
                />,
                tab2: <StyleBox 
                fontSize={props.fontSize} fontWeight={props.fontWeight} fontColor={props.fontColor} fontStyle={props.fontStyle} fontFamily={props.fontFamily} bgColor={props.bgColor}
                setFontSize={props.setFontSize} setFontWeight={props.setFontWeight} setFontColor={props.setFontColor} setFontStyle={props.setFontStyle} setFontFamily={props.setFontFamily} setBgColor={props.setBgColor}
                /> ,
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;