import { PrismaClient } from "@prisma/client";
import MainBox from "@/components/MainBox";


const prisma = new PrismaClient();


export default function (props:any) {

  const form_id = props.params.form_id;

var formValues=
{
      isfirstName:false,
      isLastName:false,
      isEmail:false,
      isPhone:false,
      isDOI:true,
      textVal:form_id,
      fontSize:0.8,
      fontStyle:"normal",
      fontFamily:"sans-serif",
      fontColor:"#000000",
      fontWeight:400,
      bgColor:"#ffffff",
  
};
  async function handleDB() {

    const allforms = await prisma.forms.findMany({
      where: { form_id: BigInt(form_id) },
    });


   
    if (allforms.length > 0) {
      // await prisma.forms.update({
      //   where: {
      //     form_id: BigInt(form_id),
      //   },
      //   data: {
      //     form_data: searchProps,
      //   },
      // });
      console.log(allforms[0].form_data)
       formValues = JSON.parse( allforms[0].form_data as string);
      //  console.log(formValues);
      

    } 
    else
     {
      console.log("Incorrect link provided...");
      
      // await prisma.forms.create({
      //   data: {
      //     form_id: BigInt(form_id),
      //     form_data: JSON.stringify(searchProps),
      //   },
      // });
    }
  }

  handleDB()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  return (
    <MainBox
      isfirstName={formValues.isfirstName}
      isLastName={formValues.isLastName}
      isEmail={ formValues.isEmail}
      isPhone={ formValues.isPhone}
      isDOI={formValues.isDOI}
      textVal={formValues.textVal}
      fontSize={ formValues.fontSize}
      fontStyle={formValues.fontStyle}
      fontFamily={formValues.fontFamily}
      fontColor={formValues.fontColor}
      fontWeight={ formValues.fontWeight}
      bgColor={formValues.bgColor}
      id={form_id}
    />
  );
}


