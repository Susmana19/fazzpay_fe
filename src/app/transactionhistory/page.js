import React from 'react'
import History from '../components/history'
import NavigationBar from '../components/navigationbar'
import Sidebar from '../components/sidebar'

const TransactionHistory = () => {

  return (
    <>

     <NavigationBar/>

    <div className='bg-sky'>
      <div className='pl-[8vw] pt-5 flex gap-5'>
          <Sidebar/>
          <div className='w-[60vw] bg-white px-10 py-5 rounded-3xl '>
            <History/>
          </div>
      </div>
    </div>
    </>
  )
}

export default TransactionHistory