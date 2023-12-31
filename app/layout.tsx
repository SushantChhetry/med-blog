import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata= {
  title: 'Med-Me',
  description: 'Follow me in my medical journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar/>
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        {children}
        </main>
        </body>
        <Footer/>
    </html>
  )
}
