import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'
const NavbarComponent = () => {
  const session=null
  return (
    <div className="px-8 py-5 flex flex-row justify-between">
      <div className="flex flex-1 justify-start gap-12 items-center">
        <Image src="/logo.svg" alt='logo ' width={115} height={45}/>
        <div className="">
            <ul className="md:flex hidden flex-row justify-between gap-5">
                {NavLinks.map((link,index)=>(
                    <Link href={link.href} key={link.key}>
                        <h4 className="text-[14px] text-black">{link.text}</h4>
                    </Link>
                ))}
            </ul>
        </div>
      </div> 
      {session ? (
        <div className="flex gap-5">
            user photo
            <Link href="/create-project">share work</Link>
        </div>
      ):(
        <AuthProvider/>
      )} 
   </div>
  )
}

export default NavbarComponent