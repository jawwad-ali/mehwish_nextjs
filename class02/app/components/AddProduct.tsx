'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const AddProdcut = () => {
    const [productName , setProductName] = useState<string>('')
    const [productDesc, setProductDesc] = useState<string>('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {  
        e.preventDefault()
        const url = await fetch('/api/product' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productName, productDesc })
        })
        router.refresh()
        await url.json()
    }


    return (
        <>
            <form onSubmit={handleSubmit} 
                className="w-full flex flex-col mt-5 justify-center items-center">
                <input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value) }
                    type="text" 
                    className="border border-white p-5" 
                    placeholder="Enter Product Name" 
                />

                <br /> <br />

                <input
                    value={productDesc}
                    onChange={(e) => setProductDesc(e.target.value) }
                    type="text" 
                    className="border border-white p-5" 
                    placeholder="Enter Product Description" 
                />

                <input type="submit" value="Please add product" className='px-8 py-2 bg-red-500 text-white my-10' />
            </form>
        </>
    )
}
export default AddProdcut