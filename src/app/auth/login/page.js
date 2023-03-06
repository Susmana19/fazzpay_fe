'use client';

import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import bg from '../../../../public/bg-auth.jpg'
import email_icon from '../../../../public/email.svg'
import Link from 'next/link'
import axios from 'axios';

const LoginPage = () => {

  const router = useRouter();
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })


  const [validate, setValidate] = useState({error: false, message: ''})
  
  const handleLogin = async (e) => {
    e.preventDefault()
    await axios({
      url: 'http://localhost:5000/api/v1/auth/login',
      method: "POST",
      data: loginForm
    }).then((res)=> {
      localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
      router.push('/dashboard')
    }).catch((err) => {
      setValidate({error: true, message: err.response.data.message})
    })
  }

  return (
        <>
        <div className='flex'>
                <Image src={bg} alt='fazzpay' className='h-[110vh]' width={600}/>
                <div className='pl-[5vw] py-10 w-[45vw]'>
                    <div>
                        <p className='font-bold text-3xl'>Start Accessing Banking Needs </p>
                        <p className='font-bold text-3xl'>With All Devices and All Platforms</p>
                        <p className='font-bold text-3xl'>With 30.000+ Users</p>
                        <p className='mt-10'>Transfering money is eassier than ever, you can access</p>
                        <p>FazzPay wherever you are. Desktop, laptop, mobile phone?</p>  <p>we cover all of that for you!</p>
                    </div>

            {validate.error && (
                <div className="alert alert-error shadow-lg mt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{validate.message}.</span>
                </div>
                </div>
            )}
                    {/* Form */}
                    <form onSubmit={handleLogin} className='mt-10'>     
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={email_icon} alt='email'/>
                            <input
                            onChange={(e) => setLoginForm({
                                ...loginForm,
                                email: e.target.value
                            })}                             
                            type="email" 
                            placeholder="Enter your e-mail" 
                            className="input w-full focus:outline-none" />
                        </div>                                             
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={email_icon} alt='email'/>
                            <input
                            onChange={(e) => setLoginForm({
                                ...loginForm,
                                password: e.target.value
                            })}                             
                            type="password" 
                            placeholder="Create your password" 
                            className="input w-full focus:outline-none" />
                        </div>
                        <Link href='/login' className='text-end font-semibold'> <p>Forgot Password?</p> </Link>
                        <button type='submit' className="btn bg-slate-400 border-none w-full mt-10">Login</button>
                    </form>
                    <p className='mt-5 w-full text-center'> Dont have an account ? Lets <Link href='/auth/register'><span className='text-primary font-bold'>Sign Up</span></Link>  </p>
                </div>

        </div>  
        </>
  )
}

export default LoginPage