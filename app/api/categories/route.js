import connectMongo from "@/models/db";
import { Category } from "@/models/models";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectMongo()
        const categories = await Category.find({})
        return NextResponse.json({ categories })
    } catch (error) {
        console.log(error)
        throw error
    }

}