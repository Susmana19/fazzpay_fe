'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {usePathname, useSelectedLayoutSegment } from 'next/navigation';

import NavigationBar from '../components/navigationbar'
import Sidebar from '../components/sidebar'
import profile_img from '../../../public/profile_img.svg'

const TransferPage = () => {
    const segment = usePathname();
    const id = segment.split('/')[2]

    const [dataUsers, setDataUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/users')
        .then((res) => setDataUsers(res.data.data))
        .catch((err)=> console.log(err))
    }, []) 

  return (
    <>
    <NavigationBar/>

    <div className='bg-sky'>
      <div className='pl-[8vw] pt-5 flex gap-5'>
          <Sidebar/>
          <div className='w-[60vw] bg-white px-10 py-5 rounded-3xl '>
            <div className=''>
                <p className='text-lg font-bold mb-3'>Search Receiver</p>
                <form className='mb-5'>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search receiver here" required />
                    </div>
                </form>  
                {dataUsers.map((item, index)=> {
                    return (
                        <Link key={item.id} href={`/transfer/${item.id}`} title='send transfer to this account'>
                            <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                                <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                                <div className="">
                                    <p className="font-bold text-lg">{item.firstname} {item.lastname}</p>
                                    <p> +62 878512 1245</p>
                                </div>
                            </div> 
                        </Link>                  
                    )
                })}                
                {/* <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                    <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                    <div className="">
                        <p className="font-bold text-lg">Robert Chandler</p>
                        <p> +62 878512 1245</p>
                    </div>
                </div>  
                <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                    <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                    <div className="">
                        <p className="font-bold text-lg">Robert Chandler</p>
                        <p> +62 878512 1245</p>
                    </div>
                </div>   */}
            </div>
          </div>
      </div>
    </div>   
    </>
  )
}

export default TransferPage