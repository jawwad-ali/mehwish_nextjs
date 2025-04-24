"use client"
import { usePathname } from "next/navigation"
import Cookies from 'js-cookie'

const HandleCookies = () => {
    const pathname = usePathname()
    console.log('pathname', pathname)

    if(pathname == '/admin'){
        // setting the cookie
        Cookies.set('role', 'admin')
    }
    else if(pathname == '/user'){
        Cookies.set('role', 'student')
    }

    return(
        <h1>Cookie</h1>
    )
}
export default HandleCookies