'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {usePathname, useSelectedLayoutSegment } from 'next/navigation';

import NavigationBar from '../../../components/navigationbar'
import Sidebar from '../../../components/sidebar'
import profile_img from '../../../../../public/profile_img.svg'
import success_icon from '../../../../../public/success_icon.svg'
import { useRouter } from 'next/navigation';

const SuccessTransfer = () => {

    const router = useRouter()

    const segment = usePathname();
    const id = segment.split('/')[2]

    const id_sender = JSON.parse(localStorage.getItem('@userLogin')).user.id
        
    const [dataSender, setDataSender] = useState([])
        
    useEffect(()=> {
        axios.get(`http://localhost:5000/api/v1/transfer/sender/${id_sender}`)
        .then((res) => setDataSender(res.data.data))
        .catch((err)=> console.log(err))
    }) 

    const [dataReceiver, setDataReceiver] = useState([])
        
    useEffect(()=> {
        axios.get(`http://localhost:5000/api/v1/users/${id}`)
        .then((res) => setDataReceiver(res.data.data))  
        .catch((err)=> console.log(err))
    })

return (
    <>
    <NavigationBar/>
    <div className='bg-sky'>
      <div className='pl-[8vw] pt-5 flex gap-5'>
          <Sidebar/>
          <div className='w-[60vw] bg-white px-10 py-5 rounded-3xl '>
            <div>
                <Image src={success_icon} className='mx-auto mb-5' alt='Success Transfer' width={80} height={80}/>
                <p className='text-3xl font-bold text-center' >Transfer Success</p>
                <div>
                    <p className='text-lg font-bold mb-3'>Details</p>
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Amount</p>
                            <p className="font-bold text-2xl"> Rp 100.000 </p>
                            {/* {dataSender[dataSender.length - 1].amount} */}
                        </div>
                        
                    </div>
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Balance left</p>
                            <p className="font-bold text-2xl"> Rp 20.000</p>
                        </div>
                    </div>   
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Date & Time</p>
                            <p className="font-bold text-2xl">May 11, 2020 - 12.20</p>
                        </div>
                    </div> 
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Notes</p>
                            <p className="font-bold text-2xl"> buy for some socks </p>
                            {/* {dataSender[dataSender.length - 1].notes}  */}
                        </div>
                        
                    </div> 
                    <p className='text-lg font-bold mb-3'>Transfer To</p>
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                            <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                            <div className="">
                                <p className="font-bold text-lg">{dataReceiver.firstname} {dataReceiver.lastname}</p>
                                <p> +62 878512 1245</p>
                            </div>
                    </div>
                    <div className='flex justify-end gap-5'>
                        <button className='bg-sky w-[10vw] h-[7vh] text-primary rounded-lg my-5'>Download PDF</button>                                                                                  
                       <Link href='/dashboard'> <button className='bg-primary w-[10vw] h-[7vh] text-white rounded-lg my-5'>Back to Home</button> </Link>                                                                                 
                    </div>                     
                </div>
            </div>
          </div>
      </div>
    </div>       
    </>
  )
}

export default SuccessTransfer