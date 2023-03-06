import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavbarAuth = () => {
  return (
    <>
        <div className="navbar px-[5vw] pt-5 bg-grey">
            <div className="flex-1">
                <a className="text-2xl text-primary font-bold">FazzPay</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-5">
                    <Link href='/auth/login'><li><button className="btn btn-outline btn-primary rounded-xl px-8 py-2">Login</button>  </li></Link> 
                    <Link href='/auth/register'><li><button className="btn btn-primary text-white rounded-xl px-8 py-2">Sign Up</button>  </li></Link> 
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavbarAuth