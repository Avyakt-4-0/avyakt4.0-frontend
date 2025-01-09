import NavBar from '@/components/nav-bar';
import localFont from 'next/font/local'
import Image from 'next/image';
import { Jersey_10 } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Card from '@/components/card';
import Guests from '@/components/guests';
import Multiverse from '@/components/multiverse';
import Clubs from '@/components/clubs';
// Font files can be colocated inside of `pages`
const titleFont = localFont({ src: '../../public/fonts/ARB.ttf' })
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })
const farFromHomeComingFont = localFont({ src: '../../public/fonts/Far-From Homecoming.otf' })
const yellowPeasFont = localFont({ src: '../../public/fonts/Yellow Peas.ttf' })
const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
const aerionFont = localFont({ src: '../../public/fonts/aerion-bold.otf' })
const eventNames = ['technical', 'non-technical', 'cultural', 'others']

export default function Home() {
    return (
        <div className='bg-hero bg-contain min-w-full'>

            <div className='lg:min-h-screen border-[#F8861E] border-4 h-[560px]'>
                <NavBar />
                <div className='bg-loki bg-contain bg-no-repeat lg:h-[660px] h-[560px] lg:min-w-[813px] bg-center'>
                    {/* intro section */}
                    <div className='flex flex-col justify-center items-center lg:h-[660px] h-[500px]'>
                        <div className='flex flex-col w-fit lg:leading-[100.38px]  mt-32'>
                            <div className='flex justify-center items-center h-full gap-4 lg:gap-24 text-[46px] lg:text-[160px] sm:leading-[54.32px]'>
                                <h1 className={`${titleFont.className} `}>AVYAKT</h1> <h1 className={`${usangelFont.className}`}> 4.0</h1>
                            </div>
                            <h2 className={`${usangelFont.className} text-center text-[10px] lg:text-[32px]`}>The most Awaited CSE Department Fest</h2>
                        </div>
                        <div className={`flex justify-center items-center gap-2 bg-[#F8861E] lg:w-[327px] lg:h-[36px] ${ibmFont.className} text-center lg:text-[24px] text-sm rounded-lg mt-1 `}>
                            <Image src='/images/google.svg' width={30} height={30} alt="google" className='w-4 h-4' />
                            <p className='text-black p-1'>LOGIN WITH GOOGLE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-full flex justify-start w-48">
                <Image
                    src="/images/border.svg"
                    width={400}
                    height={20}
                    alt="border"
                    className=""
                />
            </div>
            {/* About event section */}
            <div className='flex flex-col justify-center items-center gap-4 lg:my-24 my-4 lg:h-[1000px] p-4 lg:p-0'>
                <p className={`${ibmFont.className} text-start text-shadow-lg lg:max-w-[90%] lg:text-[48px] lg:leading-[64.32px] lg:h-[847px] intersect:motion-preset-blur-right  motion-duration-2000`}>
                    Welcome to CSE FEST '25, the annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering.
                    This year's fest is set to be bigger and better, bringing together students, tech enthusiasts, and industry leaders to explore groundbreaking ideas and showcase talent. From hackathons and coding challenges to tech talks and interactive workshops, CSE FEST '25 offers something for everyone.
                    Whether you're here to compete, learn, or network, this event is your gateway to the world of cutting-edge technology and limitless possibilities. Join us as we innovate, code, and excel together!
                </p>
            </div>

            {/* you tube video part */}
            <div className='flex justify-center items-center lg:mt-48 p-2'>
                <div className='lg:w-[1107px] lg:h-[635px] w-full h-[200px] border-[#F8861E] border-8 lg:rounded-[83px] rounded-[40px]'>
                    {/* here we are adding youtube video */}
                </div>
            </div>
            {/* avyakt multiverse */}
            <Multiverse />

            {/* college clubs */}
            <div className='p-2'>
                <h1 className={`${jerseyFont.className} lg:text-[205px] text-[50px] text-[#FA861B] text-center`}>OUR CLUBS</h1>
                <Clubs />
                <h1 className={`${ibmFont.className} lg:text-[40px] lg:mx-24 text-start pt-2 uppercase`}>here are the clubs which collaborate with avyakt to make it more awesome</h1>
            </div>




            <div className="footer w-full pt-40">
               <div className="avyaktbg bg-footer_bg bg-no-repeat bg-center bg-contain" style={{ paddingTop: '18%' }}></div>
              </div>
              <div className="madeByTeam h-[900px] w-full bg-[#EF8713] flex flex-col justify-between pb-10 pl-14">


               <div className="copyright flex flex-col items-end pt-6 pr-6 justify-between  ">
                <h3 className='font-montserrat font-bold text-[20px] leading-[20px] text-[#D9D9D9]'>copyright @Avaykt 2025 </h3>
                <h3 className='font-montserrat font-bold text-[20px] leading-[20px] align-middle mt-1'>Made by ❤️ of Our team</h3>
               </div>

               <div className="footerlogo  h-[600px]  flex flex-col gap-7 relative">
                <img src="./images/DAMN !.svg" className='h-[156px] w-[491px]' alt=""/>
                <img src="./images/You Love.svg" className='h-[156px] w-[611px]' alt=""/>
                <img src="./images/Scrolling.svg" className='h-[156px] w-[700px]' alt=""/>
                <div className='absolute right-[10px] top-[170px] h-[300px] w-[64px] flex flex-col gap-2'>
                    <a href="">
                    <IoLogoInstagram className='w-[44px] h-[55px] text-black' />
                    </a>
                    <a href="">
                   <FaLinkedinIn  className='w-[44px] h-[55px] text-black'/>
                    </a>
                    <a href="">
                    <FaFacebookF  className='w-[44px] h-[55px] text-black'/>
                    </a>
                    <a href="">
                    <FaYoutube  className='w-[44px] h-[55px] text-black'/>
                    </a>
                </div>
               </div>
                               
                               
                <div className="footerlogo h-full mt-[170px]   flex gap-6 items-center">
                <img src="./images/gietlogo 1.svg" className='h-[109px] w-[135px]' alt=""/>
                <img src="./images/avyakt-logo-b 1.svg" className='h-[85px] w-[131px]' alt=""/>
                <img src="./images/Mask group.svg" className='h-[117.32px] w-[125.19px]' alt=""/>
                </div>



              </div>
              


        </div>
    );
}
