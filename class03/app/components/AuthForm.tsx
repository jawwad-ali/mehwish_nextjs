"use client"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

export const AuthForm = () => {
    // Type casting
    const router = useRouter()
    const emailRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputVal = emailRef?.current?.value
        const url = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: inputVal })
        })
        const data = await url.json()
        console.log(data)
        
        if(data?.redirectUrl){
            router.push(data.redirectUrl)
        }

        console.log('User Role', data)
    }

    return (
        <div className="max-w-full h-[100dvh] flex items-center justify-center">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                    className="p-5 border border-gray-300"
                    placeholder="Email"
                    ref={emailRef}
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default AuthForm
