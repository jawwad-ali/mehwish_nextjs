'use client'
import { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

const FormValidation = () => {
    const { register, handleSubmit, formState : {errors} } = useForm()

    useEffect(() => {
        console.log('Form Validation component render')
        
        // Fetch data from Local Storage
        const data = localStorage.getItem('formData')
        // If data exists (NOT NULL)
        if(data){
            console.log('data from LS', JSON.parse(data))
        }
    }, [])


    const myCustomSubmit = (data: any) => {
        console.log('data', data)
        // Set data into Local Storage
        localStorage.setItem('formData' , JSON.stringify({data}) )
    }

    return (
        <>
            <br /> <br /> <br /> <br />
            <form 
            className="bg-white flex items-center justify-center flex-col p-5"
            onSubmit={handleSubmit(myCustomSubmit)} >
                
                <input className="bg-black"
                    {...register('firstname',  {required: true})}
                    type="text"
                    placeholder="Enter First Name"
                /> <br /> <br />
                {
                    errors.firstname && 
                    <span className="text-red-700 font-bolb">
                        First Name is Req
                    </span>
                }

                <input
                {...register('lastname' , {required: true})} type="text" placeholder="Enter Value" className="bg-black" />
                {
                    errors.lastname && 
                    <span className="text-red-700 font-bolb">
                        LastName is Req
                    </span>
                }
                <input type="submit" value="Submit" className=" mt-2 bg-black text-white p-2" />
            </form>
        </>
    )
}
export default FormValidation

// Destructuring
// const getInfo = () => {
//     return {
//         name: 'ali',
//         email: 'ali@gmail.com',
//         pass: '123'
//     }
// }

// const {email} = getInfo()
// console.log(email)