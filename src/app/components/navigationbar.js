'use client';

import React from 'react'
import Image from 'next/image'
import profile_img from '../../../public/profile_img.svg'
import Link from 'next/link'

const NavigationBar = () => {


return (
        <>
            <div className="navbar px-[10vw] py-5">
                <div className="flex-1">
                    <Link href='/dashboard' className="font-bold text-2xl text-primary">FazzPay</Link>
                </div>
                <div className="card card-side py-0 h-[10vh] gap-5 mr-3">
                    <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                    <div className="">
                            {localStorage.getItem('@userLogin') ? <p className="font-bold text-lg">{JSON.parse(localStorage.getItem('@userLogin')).user.firstname} {JSON.parse(localStorage.getItem('@userLogin')).user.lastname}</p>  : <p className="font-bold text-lg">Username</p> }  
                        <p> +62 878512 1245</p>
                    </div>
                </div>     
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>            
            </div>       
        </>
  )
}

export default NavigationBar