
import { CERTIFICATE } from "@/lib/db/entites";
import { ensureDbConnected } from "@/lib/db/mongoConnection";
import { NextRequest, NextResponse } from "next/server";
import { uuid } from 'uuidv4';

export async function POST(req:NextRequest){


    //db stuff here
    ensureDbConnected();
    const body = await req.json();
    const generatedId = uuid();
    const newCertificate = new CERTIFICATE({email:body.email,certificateID:generatedId});
    newCertificate.save();
    return NextResponse.json({generatedId})
}

export async function GET(){

    return NextResponse.json({test:"done"})

}