import { NextRequest, NextResponse } from "next/server";

const products = [
    { productName: 'Phone', productDesc: 'Iphone 15 PRO MAX 256GB' }
]

// get method
export async function GET() {
    return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
    const body = await request.json() // JSON In
    console.log("Data Received on the SERVER <==>", body)
    
    products.push(body)

    return NextResponse.json({ message: "Data received" })
}