'use client'

import React from 'react'
import Image from 'next/image'
import profile_img from '../../../public/profile_img.svg'

import { useState, useEffect } from 'react';
import axios from 'axios';
import {usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { useRouter } from 'next/navigation';


const History = () => {
        const id = JSON.parse(localStorage.getItem('@userLogin')).user.id
        
        const [dataSender, setDataSender] = useState([])
        
    useEffect(()=> {
        axios.get(`http://localhost:5000/api/v1/transfer/sender/${id}`)
        .then((res) => setDataSender(res.data.data))
        .catch((err)=> console.log(err))
    }) 

        const [dataReceiver, setDataReceiver] = useState([])
        
    useEffect(()=> {
        axios.get(`http://localhost:5000/api/v1/transfer/receiver/${id}`)
        .then((res) => setDataReceiver(res.data.data))  
        .catch((err)=> console.log(err))
    }) 

    

  return (
    <>
        <p className='font-bold mb-5'>Transaction History</p> 

        {dataSender.length !== 0 && (
                dataSender.map((item)=> {
                        return (
                                <div key={item.id} className="card card-side py-0 h-[10vh] flex items-center mb-2">
                                        <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                                        <div className='flex justify-between w-full'>
                                        <div className="ml-5">
                                                <p className="font-bold">{item.receiver_name}</p>
                                                <p>Transfer</p>
                                        </div>
                                        <p className='text-lg text-rose-500 font-bold'><span>-</span>Rp {item.amount}</p>
                                        </div>
                                </div> 
                        )
                })
        )}
                        
       {dataReceiver.length !== 0 && (
        dataReceiver.map((item)=> {
                return (
               <div key={item.id} className="card card-side py-0 h-[10vh] flex items-center mb-2">
                       <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                       <div className='flex justify-between w-full'>
                           <div className="ml-5">
                                   <p className="font-bold"> {item.sender_name} </p>
                                   <p>Accept</p>
                           </div>
                           <p className='text-lg text-green font-bold'><span>+</span>Rp {item.amount}</p>
                       </div>
               </div>                                               

                )
        })
       )}
       
    </>
  )
}

export default History