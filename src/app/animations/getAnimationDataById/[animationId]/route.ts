
import { NextRequest ,NextResponse } from "next/server";


export async function GET(request:NextRequest,{ params }: { params: { animationId: string } } ){
    
      return NextResponse.json({});
   
}