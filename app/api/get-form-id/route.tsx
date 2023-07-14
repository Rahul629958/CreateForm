import { NextResponse } from 'next/server';
import prisma from '../../../components/prisma';




(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};



export async function POST(req: Request){
  try {


  const allforms = await prisma.forms.findMany({
    select:
    {
        form_id:true,
        form_data:false
    }
  });
   console.log("This is all forms: " ,allforms);
    return NextResponse.json({arr:allforms})

}

    
catch (err) {
  console.log("second error ");
   console.log(err);
    return NextResponse.json({ form_id: -1})
  }
}