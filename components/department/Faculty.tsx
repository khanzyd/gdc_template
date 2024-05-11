import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Faculty() {
  return (
    <Link href={""} className=' w-5/6 shadow-md outline outline-gray-300 outline-1 rounded px-3 flex flex-col justify-center '>
        <Image
          src='/dummy-doc.webp'
          alt='faculty'
          width={300}
          height={300}
          />
          <hr />
          <h1 className=' text-xl font-medium'>Dr.Xyz Xyz</h1>
    </Link>
  )
}

export default Faculty