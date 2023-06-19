import Image from 'next/image'
import Posts from './components/Posts'
import Footer from './components/Footer'
import MyProfilePic from './components/MyProfilePic'

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic/>
      <p className='mt-10 mb-10 mx-auto max-w-2xl text-xl text-center dark:text-white'>
  Follow along as I share my captivating journey as a premed student, striving to become a doctor. Join me as I offer candid reflections and invaluable insights into the transformative process of becoming a compassionate and skilled healer.
</p>

      <Posts/>
      <Footer/>
    </main>
  )
}
