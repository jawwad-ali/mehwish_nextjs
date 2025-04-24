"use client"
// `npm i --save-dev @types/js-cookie
import {usePathname} from 'next/navigation'
import Cookies from 'js-cookie'

const Admin = () => {

    const pathname = usePathname()

    if(pathname.includes('/admin')){
        console.log("I am admin")
        Cookies.set('role', 'admin')
    }
    
    return (
        <h1>I am an Admin</h1>
    )
}
export default Admin