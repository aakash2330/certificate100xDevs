
import { CERTIFICATE } from "@/lib/db/entites";
import { ensureDbConnected } from "@/lib/db/mongoConnection";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){


    //db stuff here

    try{

   
    ensureDbConnected();
    const body = await req.json();
    console.log("HERE")
    const certificate = await CERTIFICATE.findOne({certificateID:body.certificateId})
    console.log(body.certificateId);

    if(certificate){
        return NextResponse.json({authenticated:true})
    }
}catch(error){
console.log(error);
return NextResponse.json({authenticated:false})
}
}

export async function GET(){

    return NextResponse.json({test:"done"})

}