import React from 'react'
import Image from 'next/image'
import FooterColumn from './FooterColumn'
import { footerLinks } from '@/constants'
const FooterComponent = () => {
  return (
    <div className='px-8 py-5 flex flex-col gap-8'>
        <Image src="/logo-purple.svg" alt='oo' width={110} height={45}/>
        <p className="text-[13px] max-w-sm">flexibble is the world's leading community for creatives 
        to share grow and get hired</p>
        <div className="flex flex-wrap gap-4 justify-between">
            <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
            <div className="flex flex-col gap-6">
                <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
                <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
            </div>
            <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>
            <div className="flex flex-col gap-6">
                <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
                <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
            </div>
            <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>

        </div>
        <p className="text-[13px] ">
            @copyright 2023 all rights reserved
        </p>
    </div>
  )
}

export default FooterComponent