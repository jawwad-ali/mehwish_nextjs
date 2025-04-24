import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest){
    
//     const test = request.cookies.set('name', 'Ali Jawwad')
//     console.log('test Cookie',test)

//     console.log('Middlewre request', request.cookies)
//     const response = NextResponse.next()
//     response.cookies.set('name', 'Ali Jawwad')

//     return NextResponse.json({
//         message: request.cookies.get('name')
//     })
// }

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    // response.cookies.set('country', 'US');
    // response.cookies.set('name', 'Ali Jawwad')
    return response;
  }