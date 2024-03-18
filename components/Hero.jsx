import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row py-20 px-11 w-full md:py-28 justify-center lg:justify-between align-middle items-center h-screen">
        <div className="flex flex-col gap-7 align-middle justify-center">
            <div className="text-5xl lg:text-5xl font-semibold flex flex-col gap-4">
                <p className='md:text-6xl text-secondary-200'>
                    Transforming vision
                </p>
                <p className="text-green-700">
                    to a digital reality.
                </p>
            </div>
            <p className="font-normal text-secondary-100">
                Unlock the potential or your business, build the future with us
            </p>

            <Link href="/" className="items-center">
                <button className='bg-green-700 px-4 py-2 rounded-lg text-white'>
                    Get started
                </button>
            </Link>
        </div>
        <div className="h-1/3 md:h-full">
            <Image className='w-full' alt="image" src="/assets/images/3d__1.png" width={391} height={407} />
        </div>
    </div>
  )
}
