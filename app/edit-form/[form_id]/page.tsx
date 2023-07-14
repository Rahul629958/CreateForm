import MainBox from "@/components/MainBox";


export default function (props:any){

const form_id = props.params.form_id;

  return (
    <MainBox
      // isfirstName={formValues.contents.isfirstName}
      // isLastName={formValues.contents.isLastName}
      // isEmail={ formValues.contents.isEmail}
      // isPhone={ formValues.contents.isPhone}
      // isDOI={formValues.contents.isDOI}
      // textVal={formValues.contents.textVal}
      // fontSize={ formValues.styles.fontSize}
      // fontStyle={formValues.styles.fontStyle}
      // fontFamily={formValues.styles.fontFamily}
      // fontColor={formValues.styles.fontColor}
      // fontWeight={ formValues.styles.fontWeight}
      // bgColor={formValues.styles.bgColor}
      id={form_id}
    />
  );
}

