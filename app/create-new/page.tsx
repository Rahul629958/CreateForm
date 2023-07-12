
import MainBox from "@/components/MainBox"
import { PrismaClient } from "@prisma/client"
export default function()
{

    
  
  // const prisma = new PrismaClient()


  // async function main() {
  //   // ... you will write your Prisma Client queries here
  //   await prisma.job.create({
  //       data: {
  //         id: 3,
  //         title:"titleNamehere",
  //         location:"mumbai",
  //         salary:"12000000"
  //       },
  //     })

  //   await prisma.job.update({
  //       where:{
  //           id: 2,
  //       },
  //       data:
  //       {
  //           title:"new title rahul SOni",
  //       }
  //   })



  //   const allforms = await prisma.job.findMany()
  //   console.log(allforms)
  // }



  // main()
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })

    return <MainBox 
    isfirstName={false}
    isLastName={false}
    isEmail={false}
    isPhone={false}
    isDOI={false}
    textVal=""

    fontSize={0.8}
    fontStyle={"normal"}
    fontFamily={"sans-serif"}
    fontColor={"#000000"}
    fontWeight={400}
    bgColor={"#ffffff"}
    
    id={-1}
    />
}


