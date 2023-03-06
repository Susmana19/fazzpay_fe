import React from 'react'
import Image from 'next/image'
import company from '../../../public/company.png'

const Company = () => {
  return (
    <>
        <Image src={company} alt='company' className='w-full'/>
    </>
  )
}

export default Company