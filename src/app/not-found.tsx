import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' });

export default function NotFound() {
    return (
        <div className="bg-hero bg-cover w-full min-h-screen bg-no-repeat flex flex-col items-center justify-center p-4 relative">
            {/* Main 404 Section */}
            <div className={`flex flex-col items-center ${usangelFont.className}`}>
                <div className="flex justify-center items-center text-[250px] sm:text-[500px] text-[#F8861E] leading-none">
                    <h1>4</h1>
                    <Image src="/images/notfound.svg" width={500} height={450} alt="404 Icon" />
                    <h1>4</h1>
                </div>
                {/* Gradient text */}
                <h2 className="text-center text-[40px] sm:text-[100px] font-bold bg-gradient-to-b from-[#FA861B] to-[#FFAE00] bg-clip-text text-transparent mt-2">
                    Not Found
                </h2>
            </div>

            {/* Back to Home Button */}
            <Link href="/">
                <div
                    className={`flex items-center justify-center ${usangelFont.className} text-white text-[32px] font-normal leading-[35px] text-center bg-[#FA861B] border-2 border-[#FFAE00] shadow-[5px_5px_0px_0px_#FFAE00] w-[193px] h-[77px]`}
                >
                    Go Home
                </div>
            </Link>
        </div>
    );
}
