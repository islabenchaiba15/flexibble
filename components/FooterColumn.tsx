import React from 'react'
import Link from 'next/link'
interface Props{
    title: string
    links:Array<string>
}
const FooterColumn = ({title,links}:Props) => {
  return (
    <div className='flex flex-col gap-2'>
        <h4 className="font-bold tex-[14px]">
            {title}
        </h4>
        <div className="flex flex-col gap-1">
            {links.map((link, index) =>(
                <Link href="/" key={index}>
                    <p className="text-[12px] ">{link}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default FooterColumn