import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Container className='flex flex-col justify-center gap-10 items-center h-full'>
        <div>
            <p className='text-4xl'>Your page was not found</p>
        </div>
        <div className='text-lg bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-orange-500'>
            <Link href={"/"}>Back to Home</Link>
        </div>
    </Container>
  )
}

export default NotFoundPage