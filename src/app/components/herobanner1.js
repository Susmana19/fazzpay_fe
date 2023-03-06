import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import phone from '../../../public/phone.jpg'
import available from '../../../public/available.svg'

const HeroBanner1 = () => {
  return (
    <>
        <div className='flex items-center px-[8vw] bg-grey'>
            <div>
                <Image src={phone} alt='FazzPay' width={500} height={500}/>
            </div>
            <div className='ml-[10vw]'>
                <h1 className='text-6xl font-bold'>Awesome App </h1>
                <h1 className='text-6xl font-bold'>For Saving <span className='text-primary'>Time.</span></h1>
                <p className='mt-10'>We bring you a mobile app for banking problems that</p>
                <p className='mb-10 mt-3'>oftenly wasting much of your times.</p>
                <Link href='/dashboard'><button className='btn btn-primary w-[12vw]'>Try it Free</button></Link> 
                <Image src={available} alt='FazzPay' width={100} height={100} className='mt-10 bg-grey' />
            </div>

        </div>
    </>
  )
}

export default HeroBanner1