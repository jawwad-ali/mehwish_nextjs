import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    let getUserRole = request.cookies.get('role')
    console.log('getUserRole', getUserRole)

    if(getUserRole?.value == 'student' && request.url.includes('/admin') ){
        return NextResponse.redirect('http://localhost:3001/user')
    }

    // Homework
    // If cookie is admin and route is student redirect admin to admin page.
}