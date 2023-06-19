import { db } from '@vercel/postgres';
import { request } from 'http';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
 const client = await db.connect();
try{
    await client.sql`CREATE TABLE IF NOT EXISTS Todos(id serial, task varchar(255));`
    return NextResponse.json({message:"You called this API"})
} catch (err) {
    console.log(err)
    return NextResponse.json({message:"Something went wtong"})
} 
}

export async function POST(request:NextRequest){
    const client = await db.connect();
const req = await request.json();
try {
    if (req.task){
        await client.sql`INSERT INTO Todos(task) VALUES(${req.task})`
        return NextResponse.json({message: "Data added successfully"})
    }else
    throw new Error ("Task field is required")
} catch (error) {
    return NextResponse.json({message: (error as {message:"string"}).message})
    
}
}