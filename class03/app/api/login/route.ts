import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

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
export async function POST(request: NextRequest) {
    const body = await request.json() // Json In
    console.log("request params <==>", request)

    // if (request.url == 'http://localhost:3000/') {
    //     (await cookies()).delete('role')
    // }

    // // Extract the URL from the request
    // const url = request.url;
    // console.log('url', url)

    // const { pathname } = new URL(url, `http://localhost`);
    // // Log the current route
    // console.log("Current route:", pathname);

    if (body.email == admin_email) {
        (await cookies()).set('role', 'admin');

        return NextResponse.json({
            message: 'You are a admin',
            redirectUrl: '/admin'
        })
    }
    else {
        // (await cookies()).set('role', 'student')
        return NextResponse.json({
            message: 'You are a bright student',
            redirectUrl: '/user'
        })
    }
}