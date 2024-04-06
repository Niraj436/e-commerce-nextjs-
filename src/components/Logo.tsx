import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <h1 className='text-2xl font-semibold cursor-pointer hover:text-orange-400'>Shopify</h1>
    </Link>
  )
}

export default Logo