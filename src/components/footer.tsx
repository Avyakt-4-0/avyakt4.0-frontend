import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
const bebasFont = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
})
export default function Footer() {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full p-3 justify-center flex flex-col mx-auto'>
                <Image src='/images/footer-logo.svg' alt='footer' width={1702} height={200} objectFit={"contain"} />
                <div className='bg-[#EF8713] w-full min-h-screen'>
                    <div className={`${bebasFont.className} text-[200px] leading-[170px]`}>
                        <h1 className=' text-white  stroke-slate-800 stroke-[1px]'>DAMN !</h1>
                        <h1 className="">YOU LOVE</h1>
                        <h1>SCROLLING</h1>

                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
