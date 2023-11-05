
import { CERTIFICATE } from "@/lib/db/entites";
import { ensureDbConnected } from "@/lib/db/mongoConnection";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){


    //db stuff here

    try{

   
    ensureDbConnected();
    const body = await req.json();
    const certificate = await CERTIFICATE.findOne({certificateID:body.certificateId})
    console.log({certificate});

    if(certificate){
        return NextResponse.json({authenticated:true})
    }
    else{
        return NextResponse.json({authenticated:false})
    }
}catch(error){
console.log(error);
return NextResponse.json({authenticated:false})
}
}

export async function GET(){

    return NextResponse.json({test:"done"})

}