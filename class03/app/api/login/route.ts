import { NextRequest, NextResponse } from "next/server";

// Authentication
// User email that has been set during the SignUp.
// This can be from DB
const admin_email = 'ali@gmail.com'

// Authentication

// export async function POST(request: NextRequest ){
//     const body = await request.json() // Json In
//     console.log("Email Body <==>",body)

//     return NextResponse.json({ // JSON OUT
//         message: 'User Verified'
//     })
// }


// Authorization
export async function POST(request: NextRequest ){
    const body = await request.json() // Json In
    console.log("Email Body <==>",body)

    if(body.email == admin_email){
        return NextResponse.json({
            message: 'You are a admin',
            redirectUrl: '/admin'
        })
    }
    else{
        return NextResponse.json({
            message: 'You are a bright student',
            redirectUrl: '/user'
        })
    }
}
