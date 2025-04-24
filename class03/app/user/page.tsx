"use client"
import {usePathname} from 'next/navigation'
import Cookies from 'js-cookie'

const Users = () => {
    const pathname = usePathname()
    if(pathname.includes('/user')){
        console.log("I am user")
        Cookies.set('role', 'student')
    }

    return(
        <div>
            <h1>You are a student</h1>
        </div>
    )
}
export default Users