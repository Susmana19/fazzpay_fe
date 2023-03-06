import React from 'react'

const Progress = () => {
  return (
    <>
    <div className='w-[40vw] h-[55vh] bg-white mt-3 rounded-3xl'>
        <div className='flex justify-between mb-10 px-5 pt-3'>
            <div className='income'>
                <p>Income</p>
                <p className='font-bold'>Rp 2.120.000</p>
            </div>
            <div className='expense'>
                <p>Expense</p>
                <p className='font-bold'>Rp 1.560.000</p>
            </div>
        </div>
        <div className='flex justify-between px-5'>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                          <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                          <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
                <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                          <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '17%'}} aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="flex flex-col flex-nowrap justify-end w-5 h-[30vh] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="bg-blue-500 overflow-hidden" role="progressbar" style={{height: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>                         
        </div>    
    </div>
            
    </>
  )
}

export default Progress