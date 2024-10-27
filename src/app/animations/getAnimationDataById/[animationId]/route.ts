import { prisma } from "@/prismaClient";
import { NextRequest ,NextResponse } from "next/server";


export async function GET(request:NextRequest,{ params }: { params: { animationId: string } } ){
    if(!request) return NextResponse.json({error:"404 no request found"})
      try{
        const animationId=params.animationId;
        console.log(animationId);
        let data;

        await prisma.animations.findUnique({ where:{
            id: animationId
        },
      select:{
        animation_data:true
      }}).then((dbresolve) => {
        console.log(dbresolve);
        data=dbresolve;
      }).catch(async (dbreject) => {
        console.log(dbreject);
        data= dbreject;
      })
      return NextResponse.json(data);
    }
    catch(error){
        console.log(error);
    }
}