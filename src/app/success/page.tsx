import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white h-48 mx-2 md:mx-10 flex flex-col justify-center items-center gap-y-5'>
        <div className='flex flex-col justify-center items-center'>

        <p className=' text-2xl text-green-700 font-bold'>Your payment was successfull</p>
        <p className=' text-2xl text-green-700 font-bold'>Thank you ❤️</p>
        </div>
        <div className='flex gap-x-4'>
        <Link href={"/order"} className='px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-orange-500'>View orders</Link>
        <Link href={"/"} className='px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-orange-500'>Continue shopping</Link>
        </div>
    </div>
  )
}

export default page