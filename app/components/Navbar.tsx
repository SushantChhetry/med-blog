import React from 'react'
import Link from 'next/link'
import { FaYoutube, FaTwitter, FaLinkedin, FaLaptop} from 'react-icons/fa'
import { CiMedicalCross} from 'react-icons/ci'
import { FcAbout} from 'react-icons/fc'

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <span> <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'><Link href="/" className='text-white/90 no-underline hover:text-white'>Med Me</Link></h1></span>

            <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
                <Link className='text-white/90 hover:text-white' href="/about">
                    <FcAbout/>
                </Link>
                 <Link className='text-white/90 hover:text-white' target="_blank" href="https://www.linkedin.com/in/sakshyat-chhetry-22ba51250/">
                    <FaLinkedin/>
                </Link>
                 <Link className='text-white/90 hover:text-white' target="_blank" href="https://www.youtube.com">
                    <FaTwitter/>
                </Link>
            </div>
        </div>
    </nav>
  )
}
