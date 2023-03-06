'use client';

import React from 'react'
import Link from 'next/link'
import NavigationBar from '../components/navigationbar'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {usePathname, useSelectedLayoutSegment } from 'next/navigation';
import tf_icon from '../../../public/transfer.jpg'
import topup_icon from '../../../public/topup.jpg'
import Sidebar from '../components/sidebar'
import Progress from '../components/progress'
import History from '../components/history'

const Dashboard = () => {

let id = JSON.parse(localStorage.getItem('@userLogin')).user.id

const [dataUsers, setDataUsers] = useState([])
  useEffect(()=> {
    axios.get(`http://localhost:5000/api/v1/users/${id}`)
    .then((res) => setDataUsers(res.data.data))
    .catch((err)=> console.log(err))
    })




  return (
    <>
    <NavigationBar/>
    <div className='bg-sky w-full h-full flex px-[5vw] gap-10 pt-5'>
            <Sidebar/>
            <div className='right'>
                <div className='top flex justify-between bg-primary w-[70vw] h-[35vh] rounded-3xl px-10 py-5 text-white'>
                    <div className='balance gap-10'>
                        <p className='mb-5'>Balance</p>
                      {localStorage.getItem('@userLogin') ? (
                      <p className='text-5xl mb-8'>Rp{dataUsers.balance}</p>
                      ) :
                      <p className='text-5xl mb-8'>Rp 0 </p>
                      }
                      {localStorage.getItem('@userLogin') ? (
                        <p>{dataUsers.phone}</p>                  
                      ) :
                      <p className='text-5xl mb-8'>Masukkan No Telpon Anda </p>
                      }
                    </div>
                    <div className='btn-tf-tp flex flex-col items-center gap-5 py-4'>
                        <Link href='/transfer'><button className=''> <Image src={tf_icon} alt='transfer' className='w-[12vw] h-[10vh]'/> </button></Link> 
                        <Link href='/topup'><button className=''> <Image src={topup_icon} alt='transfer' className='w-[12vw] h-[10vh]'/> </button> </Link>                       
                    </div>
                </div>
                <div className='bottom flex gap-5'>
                    <Progress/>
                    <Link href='/transactionhistory'>
                      <div className='bg-white rounded-3xl w-[30vw] h-[55vh] mt-3 py-3 px-5'>
                        <History/>
                      </div>                   
                    </Link>
                </div>
            </div>    
    </div>



    </>
  )
}

export default Dashboard