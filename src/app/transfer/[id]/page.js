'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { useRouter } from 'next/navigation';

import NavigationBar from '../../components/navigationbar'
import Sidebar from '../../components/sidebar'
import profile_img from '../../../../public/profile_img.svg'


const TransferId = () => {

let id_sender = JSON.parse(localStorage.getItem('@userLogin')).user.id;
const [dataSender, setDataSender] = useState([])
  useEffect(()=> {
    axios.get(`http://localhost:5000/api/v1/users/${id_sender}`)
    .then((res) => setDataSender(res.data.data))
    .catch((err)=> console.log(err))
    })

const router = useRouter();
    
const segment = usePathname();
const id = segment.split('/')[2]

const [dataUsers, setDataUsers] = useState([])
  useEffect(()=> {

    const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
    setDataUsers(res.data.data)
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
})

console.log(dataUsers.firstname);


const [transferForm, setTransferForm] = useState({
    id_sender: JSON.parse(localStorage.getItem('@userLogin')).user.id,
    id_receiver: id,
    sender_name: (JSON.parse(localStorage.getItem('@userLogin')).user.firstname + ' ' + JSON.parse(localStorage.getItem('@userLogin')).user.lastname) ,
    amount: 0,
    notes: '',
    receiver_name: '',
  })

  const handleTransfer = async (e) => {
    e.preventDefault()

    try {
        await axios({
          url: 'http://localhost:5000/api/v1/transfer',
          method: "POST",
          data: transferForm,
        })
    router.push(`/transfer/${dataUsers.id}/success`)
    } catch (error) {
      console.log(error.message);  
    }

}

  return (
    <>
    <NavigationBar/>

    <div className='bg-sky'>
      <div className='pl-[8vw] pt-5 flex gap-5'>
          <Sidebar/>
          <div className='w-[60vw] bg-white px-10 py-5 rounded-3xl '>
            <form onSubmit={handleTransfer}>
                <p className='text-lg font-bold mb-3'>Transfer To</p>
                <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                    <figure><Image src={profile_img} width={15} height={5} alt="Profile"/></figure>
                    <div className="">
                        <input
                          value={(`${dataUsers.firstname}` + " " + `${dataUsers.lastname}` )}
                          onClick={(e) => setTransferForm({
                                        ...transferForm,
                                        receiver_name: e.target.value
                                    })}             
                            type='text'                                   
                        className="font-bold text-lg" />
                        <p> +62 878512 1245</p>
                    </div>
                </div> 
                <div>
                    <p className='text-lg font-bold mb-3'>Details</p>
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Amount</p>
                            <input
                            value={`${transferForm.amount}`}
                            onChange={(e) => setTransferForm({
                                        ...transferForm,
                                        amount: e.target.value
                                    })}             
                            type='number' 
                            className="font-bold text-2xl"/>
                        </div>
                    </div>
                    <div className="card card-side shadow-lg h-[16vh] mb-3 px-5 items-center gap-5 mr-3">
                        <div className="">
                            <p>Balance left</p>
                            <p className="font-bold text-2xl"> {(`${dataSender.balance}` - `${transferForm.amount}`)}</p>
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
                            <input
                            onChange={(e) => setTransferForm({
                                        ...transferForm,
                                        notes: e.target.value
                                    })}             
                            type='text'                            
                            className="font-bold text-2xl"/>
                        </div>
                    </div> 
                    <button type='submit' className='bg-primary w-[10vw] h-[7vh] text-white rounded-lg ml-[43vw] my-5'>Continue</button>                                                                                 
                </div>
            </form>
          </div>
      </div>
    </div>     
    </>
  )
}

export default TransferId