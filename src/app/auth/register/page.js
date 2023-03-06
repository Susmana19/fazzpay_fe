'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import bg from '../../../../public/bg-auth.jpg'
import email_icon from '../../../../public/email.svg'
import person_icon from '../../../../public/person.svg'
import Link from 'next/link'
import axios from 'axios';


const RegisterPage = () => {
  const router = useRouter();

    useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
    }
  })

    const [registerForm, setRegisterForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    // if (registerForm.email === '') {
    //   return alert("email is required")
    // } else if (registerForm.password === '' ) {
    //   return alert("password is required") 
    // } else if(registerForm.firstname  === '') {
    //   return alert("firstname is required")

    try {
        await axios({
          url: 'http://localhost:5000/api/v1/auth/register',
          method: "POST",
          data: registerForm,
        })

    } catch (error) {
      console.log(error.message);  
    }

}



  return (
    <>
        <div className='flex'>
                <Image src={bg} alt='fazzpay' className='h-[136vh]' width={600}/>
                <div className='pl-[5vw] py-10 w-[45vw]'>
                    <div>
                        <p className='font-bold text-3xl'>Start Accessing Banking Needs </p>
                        <p className='font-bold text-3xl'>With All Devices and All Platforms</p>
                        <p className='font-bold text-3xl'>With 30.000+ Users</p>
                        <p className='mt-10'>Transfering money is eassier than ever, you can access</p>
                        <p>FazzPay wherever you are. Desktop, laptop, mobile phone?</p>  <p>we cover all of that for you!</p>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleRegister} className='mt-10'>
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={person_icon} alt='firstname'/>
                            <input
                            onChange={(e) => setRegisterForm({
                                            ...registerForm,
                                            firstname: e.target.value
                                            })}             
                            type="text" 
                            placeholder="Enter your firstname" 
                            className="input w-full focus:outline-none" />
                        </div>
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={person_icon} alt='lastname'/>
                            <input
                            onChange={(e) => setRegisterForm({
                            ...registerForm,
                            lastname: e.target.value
                            })}             
                            type="text" 
                            placeholder="Enter your lastname" 
                            className="input w-full focus:outline-none" />
                        </div>     
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={email_icon} alt='email'/>
                            <input
                            onChange={(e) => setRegisterForm({
                            ...registerForm,
                            email: e.target.value
                            })}            
                            type="email"
                            placeholder="Enter your e-mail" 
                            className="input w-full focus:outline-none" />
                        </div>                                             
                        <div className='flex items-center border-b-4 mb-8'>
                            <Image src={email_icon} alt='email'/>
                            <input
                            onChange={(e) => setRegisterForm({
                            ...registerForm,
                            password: e.target.value
                            })}            
                            type="password" 
                            placeholder="Create your password" 
                            className="input w-full focus:outline-none" />
                        </div>
                      <button type='submit' onClick={() => router.push('/auth/login')} className="btn bg-slate-400 border-none w-full mt-10">Sign Up</button>
                    </form>
                    <p className='mt-5 w-full text-center'> Already have an account ? Lets <Link href='/auth/login'><span className='text-primary font-bold'>Login</span></Link>  </p>
                </div>
        </div>   
    </>
  )
}

export default RegisterPage